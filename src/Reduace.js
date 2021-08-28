import React, {useReducer} from 'react';
import { FaCentos } from "react-icons/fa";
import { FaBurn } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

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

const Reduace = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const Location = useLocation();
    return (
        <>
            <div className="main_div">
                <h1>Your {Location.pathname.toUpperCase().replace("/","")} Point is : {state} <FaCentos className="text-success" /><FaBurn className="text-danger" /></h1>
                <div className="">
                    <button onClick={()=>dispatch({type :"Increment"})} className="btn btn-primary">Increment</button>
                    <button onClick={()=>dispatch({type:"Decrement"})} className="btn btn-primary ms-2">Decrement</button>
                </div>
            </div>
        </>
    )
}

export default Reduace;
