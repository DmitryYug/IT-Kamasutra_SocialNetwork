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
import {RootsStateType, StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {

    const {dialogs, messages, newMessageText} = props.store.getState().dialogsPage
    const {posts, newPostText} = props.store.getState().profilePage
    const {addPost, addNewMessage, changeNewPostText, changeNewMessageText} = props.store


    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route
                    path='/profile'
                    render={() =>
                        <Profile
                            newPostTitle={newPostText}
                            addPost={addPost.bind(props.store)}
                            changeNewPostText={changeNewPostText.bind(props.store)}
                            posts={posts}
                        />}
                />
                <Route
                    path='/dialogs'
                    render={() =>
                        <Dialogs
                            newMessageText={newMessageText}
                            dialogs={dialogs}
                            messages={messages}
                            changeNewMessageText={changeNewMessageText.bind(props.store)}
                            addNewMessage={addNewMessage.bind(props.store)}
                        />}
                />
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
}

export default App;
