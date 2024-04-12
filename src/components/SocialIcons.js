import React from "react";
import { FaGoogle, FaFacebookF, FaApple, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.google.ca/" target="_blank" className="icon">
        <FaGoogle />
      </a>
      <a href="https://www.facebook.com/" target="_blank" className="icon">
        <FaFacebookF />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" className="icon">
        <FaLinkedinIn />
      </a>
      <a href="https://www.apple.com/ca/" target="_blank" className="icon">
        <FaApple />
      </a>
    </div>
  );
};

export default SocialIcons;
