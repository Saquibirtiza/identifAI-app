import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation'; 
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'; 
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin' ,
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''      
  }
 }

class App extends Component{
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined 
    }})
  }

  componentDidMount(){
    fetch('https://rocky-savannah-92463.herokuapp.com/')
    .then(response => response.json())
    .then(console.log)
  }


  calculateFaceLocation = (data) => {
    // console.log(data)
    var i;
    let leftColBox = [];
    let rightColBox = [];
    let topRowBox = [];
    let bottomRowBox = [];
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    for (i = 0; i < data.outputs[0].data.regions.length; i++) {
      const clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
      leftColBox.push(clarifaiFace.left_col * width);
      topRowBox.push(clarifaiFace.top_row * height);
      rightColBox.push(width - (clarifaiFace.right_col * width));
      bottomRowBox.push(height - (clarifaiFace.bottom_row * height));
    }
    return {
      leftCol: leftColBox,
      topRow: topRowBox,
      rightCol: rightColBox,
      bottomRow: bottomRowBox
    }
  }

  displayFaceBox = (box) => {
    // console.log(box)
    this.setState({box: box});
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  } 

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('https://rocky-savannah-92463.herokuapp.com/imageurl',{
      method:'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
          input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response){
        fetch('https://rocky-savannah-92463.herokuapp.com/image',{
          method:'put',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries:count}))
        })
        .catch(console.log)
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState(initialState)
      this.setState({route: 'signin'});
    }
    else if (route === 'home'){
      this.setState({isSignedIn: true})
      this.setState({route: route});
    }
    else{
      this.setState({route: route});
    }
  }  

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home'
          ? <div>
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
            </ div>
          : ( this.state.route === 'signin'
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}
export default App;
