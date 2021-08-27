import React, { createContext } from 'react';
import Div1 from './Div1';

const bioData = createContext();
// const biodatas = {
//     name: "kausar",
//     age: 10
// };

const Context = () => {
    return (
        <>
            {/* <bioData.Provider value={biodatas.name}>
                <Div1/>
            </bioData.Provider> */}

            <bioData.Provider value={"Create and Use Context Page"}>
                <Div1/>
            </bioData.Provider>
        </>
    )
}

export default Context;
export { bioData };
