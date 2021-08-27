import React, { useContext } from "react";
import { bioData } from "./Context";

const Div3 = () => {
  const context = useContext(bioData);
  return (
    <>
      <div className="main_div">
        <h1>hello world this is {context}!</h1>
        <p>this is div3 page!</p>
      </div>
    </>
  );
};

export default Div3;
