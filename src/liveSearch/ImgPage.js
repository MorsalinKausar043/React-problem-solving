import React from 'react';
// import img from "./mac.png";

const ImgPage = ({ userVal }) => {
    const img = `https://source.unsplash.com/600x400/?${userVal}`;
    return (
        <>
            <div className="container w-75 text-center mt-5">
                    <img src={img} alt="imgSearchPic" className="rounded shadow img-fluid"/>
            </div>
        </>
    )
}

export default ImgPage;
