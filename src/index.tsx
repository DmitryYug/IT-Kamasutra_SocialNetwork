import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {AppWithUI} from "./AppWithUI";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            {/*<App/>*/}
            <AppWithUI/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)

