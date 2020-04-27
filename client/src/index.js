import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Redux
import { Provider } from 'react-redux'
import store from './store'

// React-dnd
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
// Multi backend
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

import 'bootstrap/dist/css/bootstrap.min.css';

    ReactDOM.render(
        <Provider store={store}>
            <DndProvider backend={MultiBackend} options={HTML5toTouch}>
                <App /> 
            </DndProvider>
        </Provider>,
    document.getElementById("root")
);
