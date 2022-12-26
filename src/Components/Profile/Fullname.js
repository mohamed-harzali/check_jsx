import React from "react";

const FullName = () => {
  let firstName = "mohamed";
  let lastName = "harzali";
  return (
  <div className="name">
   <h1>{firstName + " " + lastName}</h1>
  </div>
  )
};

export default FullName;