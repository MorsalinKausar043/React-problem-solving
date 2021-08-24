import React , {useState} from 'react'

const UseStateObject = () => {

    const [MyObject, setMyObject] = useState({
        name: "kausar", cls: "doploma", age: 20
    });

    const changeData = () => {
        return (
            setMyObject({...MyObject , name : "Morsalin Kausar" , age : 21})
        )
    };

    return (
        <>
            <h4>My name is {MyObject.name} & i read in class {MyObject.cls} and i am {MyObject.age} years!</h4>
            <button className="btn btn-primary m-2" onClick={changeData}>Updata Data</button>
        </>
    )
};

export default UseStateObject;
