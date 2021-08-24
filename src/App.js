import React from 'react'
import './App.css';
import Navbar from './Navbar';
import Count from './Count';
import Api from './Api';
import UseStateObject from './UseStateObject';
import DeleteApi from './DeleteApi';
import ShortCircuitEvaluation from './ShortCircuitEvaluation';
import BasicForm from './BasicForm';

// bootstrap link is start 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// bootstrap link is end 

function App() {
  return (
    <>
      <Navbar/>
      {/* <Count /> */}
      {/* <Api /> */}
      {/* <UseStateObject/> */}
      {/* <DeleteApi/> */}
      {/* <ShortCircuitEvaluation/> */}
      <BasicForm/>
    </>
  );
};

export default App;
