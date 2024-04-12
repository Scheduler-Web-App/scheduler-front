import React from "react";

function ToggleButton({ onToggleSignUp, onToggleSignIn }) {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome Back!</h1>
          <p>Sign in with your personal details to use all of site features</p>
          <button type="button" onClick={onToggleSignIn}>
            Sign In
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome!</h1>
          <p>Sign up with your personal details to use all of site features</p>
          <button type="button" onClick={onToggleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;
