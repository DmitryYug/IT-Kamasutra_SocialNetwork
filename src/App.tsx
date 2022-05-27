import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Content/Profile/Profile";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {Settings} from "./components/Content/Settings/Settings";
import {Music} from "./components/Content/Music/Music";
import {News} from "./components/Content/News/News";
import {Route} from "react-router-dom";
import {StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Content/Dialogs/DialogsContainer";


type AppPropsType = {
    state: any,
    store: any
}

function App(props: AppPropsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route
                    path='/profile'
                    render={() =>
                        <Profile
                            store={props.store}
                        />}
                />
                <Route
                    path='/dialogs'
                    render={() =>
                       <DialogsContainer
                           store={props.store}
                       />
                    }
                />
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
}

export default App;
