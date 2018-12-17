import React, { useState, useEffect } from "react";

const Footer = () => {
  const [newCount, setNewCount] = useState(10);
  useEffect(() => {
    console.log("Running effect for newCount!");
  });

  return (
    <>
      New Count: {newCount}
      <button onClick={() => setNewCount(0)}>Reset</button>
      <button onClick={() => setNewCount(prevNewCount => prevNewCount + 1)}>
        +
      </button>
      <button onClick={() => setNewCount(prevNewCount => prevNewCount - 1)}>
        -
      </button>
    </>
  );
};

export default Footer;
