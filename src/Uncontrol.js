import React, { useRef,useState } from "react";

const Uncontrol = () => {
    const [Show, setShow] = useState(false)
  const LuckyName = useRef(null);

  const SubmitData = (e) => {
      e.preventDefault();
      const name = LuckyName.current.value;
      name === "" ? alert("Please fill the input box") : setShow(true);
  };

  return (
    <>
      <div className="main_div">
        <form action="" onSubmit={SubmitData}>
          <div>
            <label className="fw-bold" htmlFor="luckyName">
              Enter your lucky Name
            </label>
            <input
              type="text"
              id="luckyName"
              className="form-control my-3"
              ref={LuckyName}
            />
          </div>
          <button className="btn btn-danger" type="submit">
            Submit
          </button>
              </form>
              <h1 className="mt-5 fw-bold">{Show ?`The lucky name is ${LuckyName.current.value}` : ""}</h1>
      </div>
    </>
  );
};

export default Uncontrol;
