(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(42)},21:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(14),o=a.n(i),r=(a(21),a(3)),l=a(4),c=a(6),u=a(5),h=a(7),m=a(15),d=a.n(m).a.initializeApp({apiKey:"AIzaSyC-5J_uYcnpGYDlEMYQ1MApzxnhTAeMJfo",authDomain:"yeti-io.firebaseapp.com",databaseURL:"https://yeti-io.firebaseio.com",projectId:"yeti-io",storageBucket:"yeti-io.appspot.com",messagingSenderId:"1010299945019"}),p=(a(34),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",null,s.a.createElement("p",null,"Navbar"))}}]),t}(n.Component)),g=a(10),f=(a(36),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.login=function(e){a.setState({loading:!0}),e.preventDefault(),d.auth().signInWithEmailAndPassword(a.state.email,a.state.password).then(function(e){a.setState({loading:!1})}).catch(function(e){console.log(e.message),a.setState({errors:e.message})})},a.signup=function(e){a.setState({loading:!0}),e.preventDefault(),d.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).then(function(e){a.setState({loading:!1})}).catch(function(e){console.log(e.message),a.setState({errors:e.message})})},a.state={email:"",password:"",loading:!1,errors:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Login"},s.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"Email",name:"email",autoComplete:"username"}),s.a.createElement("input",{type:"password",onChange:this.handleChange,placeholder:"Password",name:"password",autoComplete:"current-password"}),this.state.loading&&!this.state.errors?s.a.createElement("p",{className:"preloader"},"Loading ..."):null,s.a.createElement("button",{onClick:this.login},"login"),s.a.createElement("button",{onClick:this.signup},"signup"),this.state.errors?s.a.createElement("p",{className:"error_message"},this.state.errors):null)}}]),t}(n.Component)),v=(a(38),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.logout=function(){d.auth().signOut()},a.show=function(){a.setState({show:!a.state.show})},a.new=function(e){a.setState({loading:!0}),e.preventDefault();var t=a.state.title,n=a.state.description,s=a.state.picture||"",i=d.auth().currentUser;d.database().ref("feed/").push({title:t,description:n,picture:s,user:i.email}).then(function(e){a.setState({loading:!1,show:!1})}).catch(function(e){console.log(e)})},a.componentDidMount=function(){a.setState({loading:!0}),d.database().ref("/feed/").on("value",function(e){var t=e.val(),n=[],s=[];for(var i in t)n.push(t[i]),s.push(i);var o=n.reverse();a.setState({list:o,keys:s,loading:!1})})},a.state={loading:!0,show:!1,title:"",description:"",picture:"",list:[],keys:[]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.list.map(function(t,a){return s.a.createElement("div",{key:a,className:"Post"},s.a.createElement("p",{className:"Post_user"},"Posted by ",t.user),e.state.picture&&""!==e.state.picture?s.a.createElement("img",{className:"Post_image",src:t.picture}):null,s.a.createElement("div",{className:"Post_info"},s.a.createElement("p",{className:"Post_title"},t.title),s.a.createElement("p",{className:"Post_description"},t.description)))});return s.a.createElement("div",null,this.state.show?s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("button",{onClick:this.show},"Hide")),s.a.createElement("div",{className:"Form_create"},s.a.createElement("input",{value:this.state.title,onChange:this.handleChange,name:"title",placeholder:"Title.."}),s.a.createElement("input",{value:this.state.description,onChange:this.handleChange,name:"description",placeholder:"Description.."}),s.a.createElement("input",{value:this.state.picture,onChange:this.handleChange,name:"picture",placeholder:"Picture URL.."}),s.a.createElement("button",{onClick:this.new,className:"btn_submit"},"Submit Post"))):null,this.state.show?null:s.a.createElement("button",{onClick:this.show,className:"btn_create"},"Create post"),this.state.loading?s.a.createElement("div",{className:"preloader"},"Loading Home.."):null,s.a.createElement("div",{className:"cards"},t))}}]),t}(n.Component)),b=(a(40),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.setState({loading:!0}),d.auth().onAuthStateChanged(function(e){e?a.setState({loggedIn:!0,loading:!1}):a.setState({loggedIn:!1,loading:!1})})},a.state={error:null,loggedIn:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p,null),s.a.createElement("div",{className:"App_centered"},this.state.loggedIn?s.a.createElement(v,null):s.a.createElement(f,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.394e0331.chunk.js.map