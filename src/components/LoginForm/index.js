import { Component } from "react";

import { GoogleLogin } from "react-google-login";

import { Navigate } from "react-router-dom";

import "./index.css";

const clientId =
  "996481074795-r2el0hqgagrj4dd0l00t2aeaqgl7b86h.apps.googleusercontent.com";
class LoginForm extends Component {
  renderPasswordField = () => {
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <br></br>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value="................."
        />
      </>
    );
  };

  renderUsernameField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          Email address
        </label>
        <br></br>
        <input
          type="text"
          id="username"
          className="username-input-field"
          placeholder="palisaihamsika@gmail.com"
        />
      </>
    );
  };

  render() {
    const onSuccess = () => {
      console.log("success");
      <Navigate replace to="/components/Home" />;
    };
    return (
      <div className="login-form-container">
        <div className="name-card">
          <h1 className="heading1" align="left">
            Board.
          </h1>
        </div>
        <form className="login-form-card">
          <h1 className="heading2">Sign in</h1>
          <h1 className="heading3">Sign in to your account</h1>
          <div className="buttons-container">
            <div>
              <GoogleLogin
                className="button-google"
                clientId={clientId}
                buttonText="Sign in with google"
                onSuccess={onSuccess}
                style={{ marginTop: "100px" }}
                isSignedIn={true}
              />
            </div>
          </div>
          <div className="form-back">
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <h1 className="para">Forgot password?</h1>
            <button type="submit" className="login-button">
              Sign In
            </button>
          </div>
          <h1 className="head">
            Don't have an account?
            <span className="span-cont">Register here.</span>
          </h1>
        </form>
      </div>
    );
  }
}

export default LoginForm;
