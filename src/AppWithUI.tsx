import React from 'react'
import './App.css';
import {NavbarWithUI} from "./components/Navbar/NavbarWithUI";
import {Profile} from "./components/Content/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Content/Dialogs/DialogsContainer";
import {HeaderWithUI} from "./components/Header/HeaderWithUI";
import {UsersContainer} from "./componentsWithUI/Content/Users/UsersContainer";

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
                <Route
                    path='/users'
                    render={() => <UsersContainer/>}
                />
            </div>
        </div>
    )
}
