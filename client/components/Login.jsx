import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
import {PostData, getLoginData} from './api/PostData';
import {Redirect} from 'react-router-dom';


class Login extends Component {

  constructor(){
    super();
   
    this.state = {
     username: '',
     password: '',
     redirectToReferrer: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  

  login() {
    if(this.state.username && this.state.password){
      getLoginData('/v1/login',this.state).then((result) => {
       if(result && result.text == 'ok'){
         sessionStorage.setItem('userData', true) ;        
         this.setState({redirectToReferrer: true});
        //  route.location.push('/home');
       }
       
      }).catch((err) => {
        alert("Please check your email or password!");
      })
    }
    
   }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }

  
  

  render() {

    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/home'}/>)
    }

     return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
          
          <h4>Login</h4>
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
          <label>Password</label>
          <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
          <input type="submit" className="button success" value="Login" onClick={this.login}/>
          <a href="/signup">Registration</a>
        </div>
      </div>
    );
  }
}

export default Login;
    
  