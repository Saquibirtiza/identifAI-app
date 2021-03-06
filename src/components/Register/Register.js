import React from 'react';
 
class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: '',
            name: '',
            displayText: ''
        }
    }
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://rocky-savannah-92463.herokuapp.com/register',{
            method:'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id){
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
            else{
                this.setState({displayText: user})
            }
        })
    }

    render(){
        return (
            <article className="br3 ba shadow-5 b--gray-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 white mh0">Register</legend>
                            <label className="lh-copy white f5" style = {{textTransform: "uppercase"}} >{this.state.displayText}</label>
                            <div className="mt3">
                                <label className="db fw6 lh-copy white f6" htmlFor="name">Name</label>
                                <input onChange = {this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy white f6" htmlFor="email-address">Email</label>
                                <input onChange = {this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy white f6" htmlFor="password">Password</label>
                                <input onChange = {this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                            </div>
                            {/* <label className="pa0 ma0 lh-copy f6 white pointer"><input type="checkbox"/> Remember me</label> */}
                        </fieldset>
                        <div className="">
                            <input onClick = {this.onSubmitSignIn} className="b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;