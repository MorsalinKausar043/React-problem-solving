import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const TostifyLogin = () => {

    const diffTost = () => {
        toast.error('🦄 User data invalided!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

    return (
        <>
            <div className="main_div">
                <h2>wellcome to the my website please login!</h2>
                <button onClick={diffTost} className="btn btn-primary">Login</button>
            </div>
            
            <ToastContainer/>
        </>
    )
}

export default TostifyLogin;
