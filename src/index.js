import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './comment-add-remove';
// import App from './comment-origin';
import App from './comment-practise';
// import App from './comment-full';
// import ShoppingCart from './shoppingCart-original';
import ShoppingCart from './shoppingCart-practise';
// import ShoppingCart from './shoppingCart-full';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    // <ShoppingCart />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
