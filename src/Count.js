import React ,{useState} from 'react';

const Count = () => {

    const [Count, setCount] = useState(0);

    return (
        <>
            <div className="container h-100">
                <div className="row">
                    <div className="col-10 col-md-12 main_div">
                        <h1>Your Number is : {Count}</h1>
                        <button className="btn btn-secondary" onClick={()=> setCount(Count + 1)}>Click Increment</button>
                        <button className="btn btn-secondary mt-2" onClick={() => {
                            if (Count > 0)
                            {
                                setCount(Count -1)
                            }
                        }}>Click Decrement</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Count;
