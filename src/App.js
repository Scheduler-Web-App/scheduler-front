import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import ToggleButton from "./components/ToggleButton";
import GetStarted from "./components/GetStarted";
import "./App.css";

function App() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [isGetStarted, setIsGetStarted] = useState(true);

  const handleToggleSignUp = (e) => {
    e.preventDefault();
    setIsSignUpActive(true);
  };

  const handleToggleSignIn = (e) => {
    e.preventDefault();
    setIsSignUpActive(false);
  };

  const handleGetStarted = () => {
    setIsGetStarted(false);
  };

  const containerClasses = `container ${isSignUpActive ? "active" : ""}`;

  return (
    <div className={containerClasses} id="container">
      {isGetStarted ? (
        <GetStarted onGetStarted={handleGetStarted} />
      ) : (
        <>
          {isSignUpActive ? <SignUpForm /> : <SignInForm />}
          <ToggleButton
            onToggleSignUp={handleToggleSignUp}
            onToggleSignIn={handleToggleSignIn}
          />
        </>
      )}
    </div>
  );
}

export default App;
