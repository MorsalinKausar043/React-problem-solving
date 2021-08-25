import React, { useState } from "react";

const RegistrationForm = () => {
  const [userRegister, setuserRegister] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const [ShowUserData, setShowUserData] = useState([]);

  const StorageVal = (e) => {
    const { name, value } = e.target;
    setuserRegister({ ...userRegister, [name]: value });
  };

  const SubmitData = (e) => {
    e.preventDefault();
    const { name, email, number, password } = userRegister;
    if (name && email && number && password) {
      const newData = { ...userRegister, id: new Date().getTime().toString() };
      // setShowUserData([...ShowUserData,newData]); // map a all show krbe tai single show korailam
      setShowUserData([newData]);
      setuserRegister({ name: "", email: "", number: "", password: "" });
    } else {
      alert("Please fill the input form!");
    }
  };

  return (
    <>
      <div className="main_div">
        <form className="form" onSubmit={SubmitData}>
          <input
            className="form-control"
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
            onChange={StorageVal}
            value={userRegister.name}
          />
          <input
            className="form-control my-2"
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={StorageVal}
            value={userRegister.email}
          />
          <input
            className="form-control my-2"
            name="number"
            id="number"
            type="number"
            placeholder="Enter your number"
            onChange={StorageVal}
            value={userRegister.number}
          />
          <input
            className="form-control my-2"
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={StorageVal}
            value={userRegister.password}
          />

          <button className="btn btn-primary" type="submit">
            submit
          </button>
        </form>
        <div className="mx-auto">
          {ShowUserData.map((crrElm) => {
            const { name, email, number, password, id } = crrElm;

            return (
              <div key={id}>
                <h3 className="my-5 fw-light">
                  My name is <span className="fw-bold">{name}</span>. My email
                  is <span className="fw-bold">{email}</span> . My Mobile number
                  is <span className="fw-bold">{number}</span> and My password
                  is <span className="fw-bold">{password}</span>
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
