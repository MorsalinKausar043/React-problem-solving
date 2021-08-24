import React , { useState } from 'react';

const BasicForm = () => {

    const [Data, setData] = useState({
        name: "",
        email: ""
    });

    const [Details, setDetails] = useState("")

    const StorageVal = (e) => {
        let { name, value } = e.target;
        setData({ ...Data, [name]: value }); 
    };

    const SubmitData = () => {
        const {name, email} = Data;
        if (name && email)
        {
            setDetails(Data);
            setData({name : "", email : ""}) 
        }
        else
        {
            alert("sry! Please fill the Form.")
        }
            
    }

    return (
        <>
            <div className="main_div">
                <div className="form">
                    <input className="form-control" name="name" id="name" type="text" placeholder="Enter your name" onChange={StorageVal} value={Data.name}/>
                    <input className="form-control my-2" name="email" id="email" type="email" placeholder="Enter your email" onChange={StorageVal} value={Data.email}/>
                    <button className="btn btn-primary" onClick={SubmitData}>submit</button>
                </div>
                <div className="container">
                    <h3 className="my-5 fw-light">My name is <span className="fw-bold">{Details.name}</span> And My email is <span className="fw-bold">{Details.email}</span></h3>
                </div>
            </div>
        </>
    )
}

export default BasicForm;
