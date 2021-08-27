import React, { useState, useEffect } from 'react';
import useCount from './useCount';

const Counts = () => {
   
    const [Val, setVal] = useState(0);
    useCount(Val);
    

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

export default Counts;
