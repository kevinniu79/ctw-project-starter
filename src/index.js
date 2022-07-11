import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/root/root';
import reportWebVitals from './reportWebVitals';
/* This code initializes a React application.  The code searches the index.html
 * file (./public/index.html) for an element with the id attribute "root," then
 * replaces that element with the React application.
 *
 * The code replaces <div id="root" /> with the React component <Root />.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

/* If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
