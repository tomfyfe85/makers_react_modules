// import React from "react";

const Button: React.FC<{ names:string[] }> = ({names}) => {
  return (<div>
    {names.map((name) => (
      <p>{name}</p>
    ))}
  </div>)
};

export default Button;
