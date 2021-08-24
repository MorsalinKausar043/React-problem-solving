import React, { useState } from 'react'

const ShortCircuitEvaluation = () => {

    let [Data,setData] = useState("jamalpur hobe karon etate value thakle eitai hobe nh thakle or er por er ta hobe!");
    let [Data2,setData2] = useState("Data thakai 'jamal er ma ' show krse , data nh thakle show krto nh!");

    return (
        <>
            <div className="main_div">
                <h2>{Data || "digpite"}</h2>
                <h2>{ Data2 && "jamal er ma" }</h2>
            </div>
        </>
    )
}

export default ShortCircuitEvaluation;
