import React from 'react'
import './App.css';
import { HeaderWithUI } from './components/Header/HeaderWithUI';
import {NavbarWithUI} from "./components/Navbar/NavbarWithUI";
import {Route} from "react-router-dom";
import { Profile } from './components/Content/Profile/Profile';
import { WithAuthRedirectDialogsContainer } from './components/Content/Dialogs/DialogsContainer';
import { UsersContainer, WithAuthRedirectUsersContainer } from './components/Content/Users/UsersContainer';
import { ProfileContainer, WithAuthRedirectProfileContainer } from './components/Content/Profile/ProfileContainer';
import { HeaderApiContainer, HeaderContainer } from './components/Header/HeaderApiContainer';
import { Login } from './components/Login/Login';

export const App = () => {
    return (
        <div className="app-wrapper" >
            <HeaderContainer/>
            <NavbarWithUI/>
            <div className='app-wrapper-content'>
                <Route
                    path='/profile/:userId?'
                    render={() => <WithAuthRedirectProfileContainer/>}/>
                <Route
                    path='/dialogs'
                    render={() => <WithAuthRedirectDialogsContainer/>}
                />
                <Route
                    path='/users'
                    render={() => <WithAuthRedirectUsersContainer/>}
                />
                <Route
                    path='/login'
                    render={() => <Login/>}
                />
            </div>
        </div>
    )
}
