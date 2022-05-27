import React from 'react';
import './index.css';
// import {store} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";

// const renderEntireTree = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App store={store}/>
//         </BrowserRouter>,
//         document.getElementById('root')
//     )
// }
const renderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree (state)
})

