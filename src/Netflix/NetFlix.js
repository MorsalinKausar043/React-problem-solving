import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NetFlix = () => {
    const [Num, setNum] = useState();
    const [Moves, setMoves] = useState()
    const [moveLen, setmoveLen] = useState()
    useEffect(() => {
        const getData = async () => {
            const fetchData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Num}`);
            const { data:{name,moves}} = fetchData;
            setMoves(name)
            setmoveLen(moves.length)
        }
        getData();
    })
   
    return (
        <>
            <div className="main-div d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-light text-capitalize shadow fw-bold">Your Movie Searis Names : <span className="text-danger ">${Moves}</span>!</h2>
                <h2 className="text-light text-capitalize shadow fw-bold">This searies have movies : <span className="text-danger ">${moveLen}</span>!</h2>
                <h2 className="text-light text-capitalize shadow fw-bold">Your Value is <span className="text-danger ">${Num}</span></h2>
                <select onChange={(e)=>setNum(e.target.value)} className="p-2 mt-3 rounded shadow fw-bold">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="25">25</option>
                </select>
            </div>
        </>
    )
}

export default NetFlix;
