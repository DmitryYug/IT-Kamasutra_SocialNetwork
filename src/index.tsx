import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<App store={store}/>*/}
            <App store={store}/>
        </BrowserRouter>,
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