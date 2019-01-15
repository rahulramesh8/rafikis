import React, { useState } from "react";

const Footer = () => {
  const [color, setColor] = useState("blue");

  return (
    <div>
      <input type="text" onChange={event => setColor(event.target.value)} />
      <div>The input is {color}</div>
    </div>
  );
};

export default Footer;
