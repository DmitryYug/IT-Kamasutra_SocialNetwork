import React from 'react';
import './index.css';
import state from './redux/state'
import {renderEntireTree} from "./render";


renderEntireTree (state)

// ReactDOM .render(
//     <App
//         appState={state}
//     />,
//   document.getElementById('root')
// );