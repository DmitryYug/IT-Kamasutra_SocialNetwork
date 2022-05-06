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
import {addPost, changeNewPostText, RootsStateType} from "./redux/state";


type AppPropsType = {
    appState: RootsStateType
}

function App (props: AppPropsType) {

    const {dialogs, messages} = props.appState.dialogsPage
    const {posts, newPostTitle} = props.appState.profilePage

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route
                        path='/profile'
                        render={ () =>
                            <Profile
                                newPostTitle={newPostTitle}
                                addPost={addPost}
                                changeNewPostText={changeNewPostText}
                                posts={posts}
                        />}
                    />
                    <Route
                        path='/dialogs'
                        render={ () =>
                            <Dialogs
                                dialogs={dialogs}
                                messages={messages}

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
