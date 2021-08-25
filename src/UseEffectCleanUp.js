import React, { useState, useEffect } from "react";

const UseEffectCleanUp = () => {
  const [Count, setCount] = useState(0);

  const ActualWidth = _ => setCount(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", ActualWidth);

    return () => {
      window.removeEventListener("resize", ActualWidth);
    };
  }, [Count]);

  return (
    <>
      <div className="main_div">
        <h2 className=" text-capitalize fw-bold">
          The Actual size of this window!
        </h2>
        <h1 className="fw-bold">{Count}</h1>
      </div>
    </>
  );
};

export default UseEffectCleanUp;
