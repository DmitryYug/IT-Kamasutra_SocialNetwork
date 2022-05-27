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


type AppPropsType = {
    state: any,
    store: any
}

function App(props: AppPropsType) {

    const {dialogs, messages, newMessageText} = props.state.dialogsReducer
    const {posts, newPostText} = props.state.profileReducer
    const {dispatch} = props.store
    // console.log(dispatch)
    // console.log(props.state)

    // const {dialogs, messages, newMessageText} = props.store.getState().dialogsReducer
    // const {posts, newPostText} = props.store.getState().profileReducer
    // const {dispatch} = props.store

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
                            // dispatch={dispatch.bind(props.store)}
                            dispatch={dispatch}
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
                            // dispatch={dispatch.bind(props.store)}
                            dispatch={dispatch}
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
