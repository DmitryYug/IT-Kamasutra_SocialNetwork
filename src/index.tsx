import React from 'react';
import './index.css';
// import {store} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<App state={state} store={store}/>*/}
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
renderEntireTree()

store.subscribe(() => {
    // let state = store.getState()
    renderEntireTree()
})

