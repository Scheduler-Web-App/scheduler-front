import React from "react";
import SocialIcons from "./SocialIcons";

function SignUpForm() {
  return (
    <div className="form-container sign-up">
      <form>
        <h1>Sign Up</h1>
        <SocialIcons />
        <span>or continue with</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
