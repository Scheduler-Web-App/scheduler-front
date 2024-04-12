import React from "react";
import SocialIcons from "./SocialIcons";

function SignInForm() {
  return (
    <div className="form-container sign-in">
      <form>
        <h1>Sign In</h1>
        <SocialIcons />
        <span>or continue with</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot Your Password?</a>
        <button type="button">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
