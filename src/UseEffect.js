import React, { useState, useEffect } from 'react';

const UseEffect = () => {
   
    const [Val, setVal] = useState(0);

    useEffect(() => {

        Val > 0 ? document.title = `Click : ${Val}` : document.title = `React App`;
        
    });

    return (
        <>
            <div className="main_div">
                <h2 className="bg-secondary text-light p-3 my-3 fw-bold shadow-lg rounded">{Val}</h2>
                <button className="btn btn-primary" onClick={()=>setVal(Val + 1)}>Click-here (+)</button>
                <button className="btn btn-primary m-2" onClick={()=>setVal(Val - 1)}>Click-here (-)</button>
            </div>
        </>
    )
}

export default UseEffect;
