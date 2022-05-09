import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

const renderEntireTree = () => {
    ReactDOM .render(
        <App
            store={store}
        />,
        document.getElementById('root')
    )
}

renderEntireTree()
store.subscriber(renderEntireTree)

// renderEntireTree (state)

// ReactDOM .render(
//     <App
//         appState={state}
//     />,
//   document.getElementById('root')
// );