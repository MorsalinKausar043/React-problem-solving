import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    if (action.type === "Increment")
    {
        return state + 1;
    }
    else if (action.type === "Decrement" && state > 0)
    {
        return state - 1;
    }
    return state;
}

const Reduace2 = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div className="main_div">
                <h2>Your Reduce Point is : {state}</h2>
                <div>
                    <button onClick={()=>dispatch({type:"Increment"})} className="btn btn-primary">Increment</button>
                    <button onClick={()=>dispatch({type:"Decrement"})} className="btn btn-primary ms-2">Decrement</button>
                </div>
            </div>
        </>
    )
}

export default Reduace2;
