import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'

// const dialogsData = [
//     {name:'Dmitry', path:'1'},
//     {name:'Max', path:'2'},
//     {name:'Denis', path:'3'},
//     {name:'Incubator', path:'4'}
// ]
// const messagesData = [
//     {message:'Hey'},
//     {message:'Whats upp'},
//     {message:'How is your incubator'},
//     {message:'React is easy'}
// ]





ReactDOM.render(
    <App
        appState={state}
    />,
  document.getElementById('root')
);