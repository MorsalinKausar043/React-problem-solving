import React, {useState} from 'react'

const DeleteApi = () => {
   
    let bioData = [
        { id: 0, name: "morsalin", age: 20 },
        { id: 1, name: "morsalin", age: 21 },
        { id: 2, name: "morsalin", age: 22 },
        { id: 3, name: "morsalin", age: 23 },
        { id: 4, name: "kausar", age: 24 }
    ];

    let [Data, setData] = useState(bioData);

    const removeElm = (id) => {
    //    alert(id)
    //     console.log(id)
        const newArryaData = Data.filter((crrElm) => crrElm.id !== id);
        setData(newArryaData);
   }

    return (
        <>
            <div className="main_div">
                {
                    Data.map((currElm => {
                        return (
                            <p key={currElm.id}>My name {currElm.name} and i am {currElm.age}years old!
                                <button className="btn btn-danger ms-2" onClick={()=>removeElm(currElm.id)}>Delete</button>
                            </p>
                        )
                    }))
                }
                <button className="btn btn-primary m-2" onClick={() => setData([])}>Clear all Data</button>
            </div>
        </>
    )
};

export default DeleteApi;
