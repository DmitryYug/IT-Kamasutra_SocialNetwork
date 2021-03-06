import React from 'react'
import './App.css';
import {HeaderWithUI} from './components/Header/HeaderWithUI';
import {NavbarWithUI} from "./components/Navbar/NavbarWithUI";
import {Route} from "react-router-dom";
import {Profile} from './components/Content/Profile/Profile';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import UsersContainer from './components/Content/Users/UsersContainer';
import {HeaderApiContainer, HeaderContainer} from './components/Header/HeaderApiContainer';
import {Login} from './components/Login/Login';
import ProfileContainer from './components/Content/Profile/ProfileContainer';

export const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarWithUI/>
            <div className='app-wrapper-content'>
                <Route
                    path='/profile/:userId?'
                    render={() => <ProfileContainer/>}
                />
                <Route
                    path='/dialogs'
                    render={() => <DialogsContainer/>}
                />
                <Route
                    path='/users'
                    render={() => <UsersContainer/>}
                />
                <Route
                    path='/login'
                    render={() => <Login/>}
                />
            </div>
        </div>
    )
}
