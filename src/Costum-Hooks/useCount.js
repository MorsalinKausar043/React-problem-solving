import { useEffect } from 'react';

const useCount = (Val) => {
    useEffect(() => {

        Val > 0 ? document.title = `Click : ${Val}` : document.title = `React App`;
        
    });
}

export default useCount;
