import React, {useReducer} from 'react';
import { FaCentos } from "react-icons/fa";
import { FaBurn } from "react-icons/fa";
import { useHistory, useLocation } from 'react-router-dom';

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
    const history = useHistory();
    return (
        <>
            <div className="main_div">
                <h1>Your {Location.pathname.toUpperCase().replace("/","")} Point is : {state} <FaCentos className="text-success" /><FaBurn className="text-danger" /></h1>
                <div className="">
                    <button onClick={()=>dispatch({type :"Increment"})} className="btn btn-primary">Increment</button>
                    <button onClick={() => dispatch({ type: "Decrement" })} className="btn btn-primary ms-2">Decrement</button>
                </div>
                <button onClick={()=>history.push("/home")} className="btn btn-outline-info mt-3">Go Next</button>
            </div>
        </>
    )
}

export default Reduace;
