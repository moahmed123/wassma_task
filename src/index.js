import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './component/Login/Login';
import EditProduct from './component/Products/EditProduct';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
const reducer = combineReducers(reducers);
// applyMiddleware supercharges createStore with middleware:
const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    {/* TODO: Route when User login  */}
                    <Route path="/Login" element={<Login />} />   

                    <Route path="/EditProduct/:id" element={<EditProduct/>} />                        

                    {/* TODO: Page For Not Found  */}
                    <Route path="*" element={(<div>Not Found </div>)} />
                </Routes>
            </BrowserRouter>
            {/* <App /> */}
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
