import React from 'react'
import './App.css';
import {NavbarWithUI} from "./components/Navbar/NavbarWithUI";
import {Profile} from "./components/Content/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Content/Dialogs/DialogsContainer";
import {HeaderWithUI} from "./components/Header/HeaderWithUI";

export const AppWithUI = () => {
    return (
        <div className="app-wrapper">
            <HeaderWithUI/>
            <NavbarWithUI/>
            <div className='app-wrapper-content'>
                <Route
                    path='/profile'
                    render={() => <Profile/>}/>
                <Route
                    path='/dialogs'
                    render={() => <DialogsContainer/>}
                />
            </div>
        </div>
    )
}
