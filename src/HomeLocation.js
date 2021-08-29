import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Location from './Location';
import HomaPage from './HomaPage';
import Navbar from './Navbar';
import Reduace from './Reduace';
import TostifyLogin from './TostifyLogin';

const HomeLocation = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/home" component={HomaPage}/>
                    <Route exact path="/location" component={Location}/>
                    <Route exact path="/reduace" component={Reduace}/>
                    <Route exact path="/login" component={TostifyLogin}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default HomeLocation;
