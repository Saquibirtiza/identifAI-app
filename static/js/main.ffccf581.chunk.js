(this.webpackJsonpfinalproject=this.webpackJsonpfinalproject||[]).push([[0],{269:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){},273:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(30),o=a.n(s),r=(a(69),a(7)),l=a(8),c=a(10),m=a(9),u=a(61),h=a.n(u),p=a(62),d=a.n(p),g=a(63),f=a.n(g),b=function(){return i.a.createElement("div",null,i.a.createElement(d.a,{className:"Tilt",options:{max:25},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner pa3"},i.a.createElement("img",{style:{paddingTop:"5px"},alt:"logo",src:f.a}))))},w=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("div",null,i.a.createElement("nav",{style:{display:"flex",flexdirection:"row",justifyContent:"space-around"}},i.a.createElement("div",{style:{display:"flex",flexdirection:"column"}},i.a.createElement(b,null),i.a.createElement("p",{className:"f3 link white pa3"},"identifAI")),i.a.createElement("div",{style:{display:"flex",flexdirection:"column"}},i.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim white pa3 pointer"},"Sign Out")))):i.a.createElement("div",null,i.a.createElement("nav",{style:{display:"flex",flexdirection:"row",justifyContent:"space-around"}},i.a.createElement("div",{style:{display:"flex",flexdirection:"column",justifyContent:"flex-start"}},i.a.createElement(b,null),i.a.createElement("p",{className:"f3 link white pa3"},"identifAI")),i.a.createElement("div",{style:{display:"flex",flexdirection:"column",justifyContent:"flex-end"}},i.a.createElement("div",null,i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim white pa3 pointer"},"Sign In")),i.a.createElement("div",null,i.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim white pa3 pointer"},"Register")))))},E=(a(269),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f4 white"},"This Magic Eye can find faces in your images. Give it a try!"),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"center form pa4 br3 shadow-5"},i.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-black",onClick:a}," Detect "))))}),v=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count is...")),i.a.createElement("div",{className:"white f1"},a))},y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://rocky-savannah-92463.herokuapp.com/signin",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("article",{className:"br3 ba shadow-5 b--gray-10 mv4 w-100 w-50-m w-25-l mw6 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 white mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy white f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy white f6",htmlFor:"password"},"Password"),i.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},href:"#0",className:"f6 link dim white db pointer"},"Register")))))}}]),a}(i.a.Component),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignIn=function(){fetch("https://rocky-savannah-92463.herokuapp.com/register",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("article",{className:"br3 ba shadow-5 b--gray-10 mv4 w-100 w-50-m w-25-l mw6 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 white mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy white f6",htmlFor:"name"},"Name"),i.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy white f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy white f6",htmlFor:"password"},"Password"),i.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),a}(i.a.Component),C=(a(270),function(e){var t=e.imageUrl,a=e.box;return i.a.createElement("div",{className:"center ma pa3"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),k=(a(271),{particles:{number:{value:30,density:{enable:!0,value_area:800}}}}),S={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),i=Number(a.height);return console.log(n,i),{leftCol:t.left_col*n,topRow:t.top_row*i,rightCol:n-t.right_col*n,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("http://rocky-savannah-92463.herokuapp.com/imageurl",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://rocky-savannah-92463.herokuapp.com/image",{method:"put",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(S):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=S,e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){fetch("https://rocky-savannah-92463.herokuapp.com/").then((function(e){return e.json()})).then(console.log)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h.a,{className:"particles",params:k}),i.a.createElement(w,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?i.a.createElement("div",null,i.a.createElement(v,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(E,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(C,{box:this.state.box,imageUrl:this.state.imageUrl})):"signin"===this.state.route?i.a.createElement(y,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(N,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(272);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a.p+"static/media/image.b37dc6e4.png"},64:function(e,t,a){e.exports=a(273)},69:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.ffccf581.chunk.js.map