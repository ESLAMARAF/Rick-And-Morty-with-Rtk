import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import storeApp from './rtk/store.tsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={storeApp}>
    <App />
 </Provider>
);



