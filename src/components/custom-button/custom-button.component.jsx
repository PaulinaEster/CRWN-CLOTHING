import react from "react";

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button 
    onClick={otherProps.onClick}
    className={` ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
  >
    { children }
  </button>
);

export default CustomButton;
