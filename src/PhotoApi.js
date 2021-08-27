import React, { useState, useEffect } from 'react';
import Loading from './loading/Loading';
import GitApi from './loading/GitApi';

const PhotoApi = () => {

    const [Data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try
        {
            const fetchData = await (await fetch("https://api.github.com/users")).json();
            setData(fetchData);
            setLoading(false);
            
        } catch (error)
        {
            console.log(error)
        }
    };

    useEffect(() => getData(), []);

    if (loading)
    {
        return <Loading/>
    }

    return (
            <GitApi data={Data}/>
    )
}

export default PhotoApi;
