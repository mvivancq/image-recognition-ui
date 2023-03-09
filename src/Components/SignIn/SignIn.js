import React, { Component } from "react";
import { constants } from '../../Utils/Constants';
import './SignIn.css'

class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    onLoginChange = (event) => {
        this.setState({username: event.target.value});
    }
    onSubmitLogin = async () => {
        const response = await fetch(`${constants.apiHost}/signin`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          }),
        });
        const user = await response.json();
        if(user){
            this.props.loadUser(user);
        }
    }

    render(){
        return(
            <article className="mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80 bg-white">
                    <div className="measure">
                        <div className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onLoginChange} className="pa2 ba bg-transparent hover-bg-black hover-white w-100" type="email"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="b pa2 ba bg-transparent hover-bg-black hover-white w-100" type="password"/>
                        </div>
                        </div>
                        <div className="ph3">
                            <button onClick={this.onSubmitLogin} className="f6 ph3 pv2 white bg-dark-gray">Sign in</button>
                        </div>
                        <div className="lh-copy mt3">
                            <a href={"/register"} className="f6 link dim black db">Register</a>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignIn;