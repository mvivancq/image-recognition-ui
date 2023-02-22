import React from "react";
import './SignIn.css'

const SignIn = () => {
   
    return(
        <article className="mv4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80 bg-white">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div class="ph3">
                        <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-gray" href={"/home"}>Sign in</a>
                    </div>
                    <div className="lh-copy mt3">
                    <a href={"/register"} className="f6 link dim black db">Register</a>
                    </div>
                </form>
            </main>
        </article>
    );
}

export default SignIn;