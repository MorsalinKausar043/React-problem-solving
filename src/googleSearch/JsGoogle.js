import React, { useState, useEffect } from 'react';
const JsGoogle = _ => {
    
    const [InputData, setInputData] = useState();
    const [fetchData, setfetchData] = useState([])
    console.log(fetchData);

    const inputEvent = (e) => {
        e.preventDefault();
        setInputData(e.target.value);
    }

    const getApiData = async () => {
        try
        {
            const apiData = await (await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAY4SavRsY1yvAq1ckr-i7-4SpfHpfnP68&cx=017576662512468239146:omuauf_lfve&q=${InputData}`)).json();
            setfetchData(apiData);
            
        } catch (error)
        {
            console.log(error);
        }
    };

    // useEffect(() => getApiData(), [Show]);
    return (
        <>
            <main className="main-div">
                <section>
                    <div className="container w-50 mx-auto text-center ">
                        <h3 className="fw-bold text-light mb-3">Search your data</h3>
                        <input className="form-control" type="text" name="text" onChange={inputEvent} value={InputData} placeholder="Search" />
                        <button className="btn btn-primary mt-2" onClick={getApiData} >Search</button>
                    </div>
                </section>
           </main>
        </>
    )
};

export default JsGoogle;
