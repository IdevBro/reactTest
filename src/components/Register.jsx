import React from "react";
import "../App.css";
const Register = ({ link, imgText, info, btnText }) => {
  return (
    <div className="card">
      <img src={link} alt={imgText} />
      <p className="info">{info}</p>
      <button className="cardBtn">{btnText}</button>
    </div>
  );
};

export default Register;
