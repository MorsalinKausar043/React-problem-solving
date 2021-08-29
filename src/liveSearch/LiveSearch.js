import React, { useState } from 'react';
import ImgPage from './ImgPage';


const LiveSearch = () => {
    
    const [InputData, setInputData] = useState("");

    return (
        <>
            <section className="main-div text-center py-5">
                <div className="container w-50 text-center">
                    <input type="text" name="text"  className="form-control shadow" onChange={(e)=>setInputData(e.target.value)} value={InputData} placeholder="Search"/>
                </div>
                <ImgPage userVal={InputData}/>
            </section>
        </>
    )
}

export default LiveSearch;
