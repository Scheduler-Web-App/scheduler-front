import React from "react";
import CalendarLogo from "../assets/calendar.png";

function GetStarted({ onGetStarted }) {
  return (
    <div className="get-started-container">
      <img src={CalendarLogo} alt="Calendar Logo" className="calendar-logo" />
      <br></br>
      <h1>
        Let’s get started your journey <br></br>
        with our Scheduler App!!!
      </h1>
      <button onClick={onGetStarted}>Get Started</button>
    </div>
  );
}

export default GetStarted;
