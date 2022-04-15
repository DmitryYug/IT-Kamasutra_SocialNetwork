import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Content/Profile/Profile";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {Settings} from "./components/Content/Settings/Settings";
import {Music} from "./components/Content/Music/Music";
import {News} from "./components/Content/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import {RootsStateType} from "./redux/state";
// import state from "./redux/state";

function App(props: RootsStateType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route
                        path='/profile'
                        render={() => <Profile
                            posts={props.profilePage.posts}
                        />}
                    />
                    <Route
                        path='/dialogs'
                        render={ () => <Dialogs
                                dialogs={props.dialogsPage.dialogs}
                                messages={props.dialogsPage.messages}

                        />}
                    />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
