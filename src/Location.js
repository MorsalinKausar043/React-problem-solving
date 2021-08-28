import React from 'react';
import { useLocation , NavLink, useHistory } from 'react-router-dom';

const Location = () => {
    const Location = useLocation();
    const history = useHistory();
    return (
        <>
            <div className="main_div">
                <h1>hello world this is {Location.pathname.toUpperCase().replace("/", "")} page!</h1>
                {
                    Location.pathname === "/location" ?
                        <NavLink to="/home" className="btn btn-secondary">Go Home</NavLink> :
                        <p>not page of this!</p>
                }
                <button onClick={history.goForward} className="btn btn-outline-info mt-3">Go Next</button>
            </div>
        </>
    )
}

export default Location;
