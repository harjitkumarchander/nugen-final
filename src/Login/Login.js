import React, { Component } from 'react';
// import '../Login/Login.css';
class Login extends Component{
    render(){
        return(
        <div className="main">
            <div className="left">
                <h1>Login</h1>
                    <p><i>To your Account</i></p>
                    <p className="or"><i>or</i></p>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="LOG IN" />
            </form>
                <p class="forgot">Forgot Password?</p>

            </div>
                <div className="right">
                    <h1>Sign In</h1>
                        <p><i>with one of your social</i></p>
                        <p><i>profiles</i></p>
                    <div className="social">
                <button className="twitter"><i className="fa fa-twitter"></i></button>
                <button className="facebook"><i className="fa fa-facebook"></i></button>
                <button className="google"><i className="fa fa-google-plus"></i></button>
                <p className="dont"><i>Don't have an account?</i></p>
                <p><u>Register</u></p>
            </div>
        </div>
    </div>
        );
    }
}
export default Login;