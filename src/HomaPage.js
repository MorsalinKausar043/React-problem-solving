import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const HomaPage = () => {
    const Location = useLocation();
    const history = useHistory();
    return (
        <>
            <div className="main_div">
                <h2>This is React {Location.pathname.toUpperCase().replace("/", '')} Page!</h2>
                <button onClick={history.goBack} className="btn btn-outline-danger">go Back</button>
            </div>
        </>
    )
}

export default HomaPage;
