import React from "react";

const CompErr = () => {
  return (
  <div className="output error">
    <p>
      <i className="fa-solid fa-weight-scale"></i>
      <i className="fa-solid fa-xmark"></i>
    </p>
    <p>측정할 수 없는 BMI 수치 입니다.</p>
  </div>
  );
};

export default CompErr;
