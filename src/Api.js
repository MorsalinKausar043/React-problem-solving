import React , {useState , useEffect} from 'react'

const Api = () => {

    let bioData = [
        { id: 0, name: "morsalin", age: 20 },
        { id: 1, name: "morsalin", age: 20 },
        { id: 2, name: "morsalin", age: 20 },
        { id: 3, name: "morsalin", age: 20 },
        { id: 4, name: "kausar", age: 21 }
    ];

    let [Data, setData] = useState(bioData);

    useEffect(() => {
        return (
            window.title = "jamalpur"
        )
    }, []);

    return (
        <>
            {
                Data.map((currElm =><p key={currElm.id}>My name {currElm.name} and i am {currElm.age}years old!</p>))
            }
            <button className="btn btn-primary m-2" onClick={()=> setData([])}>Clear all Data</button>
        </>
    )
};

export default Api;
