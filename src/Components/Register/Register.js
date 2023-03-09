import React, { Component } from "react";
import { constants } from '../../Utils/Constants';
import './Register.css'

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    onLoginChange = (event) => {
        this.setState({username: event.target.value});
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onSubmitLogin = async () => {
        const response = await fetch(`${constants.apiHost}/register`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            name: this.state.username,
            email: this.state.email, 
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
                        <fieldset id="register" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input onChange={this.onLoginChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div className="ph3">
                            <button onClick={this.onSubmitLogin} className="f6 ph3 pv2 white bg-dark-gray">Register</button>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;