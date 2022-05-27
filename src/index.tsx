import React from 'react';
import './index.css';
import {store} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

renderEntireTree()
store.subscriber(renderEntireTree)

