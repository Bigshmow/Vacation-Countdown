import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Redux
import { Provider } from 'react-redux'
import store from './store'

// React-dnd
import { DndProvider } from "react-dnd";
// import Backend from "react-dnd-html5-backend";
// Multi backend
import HTML5Backend from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import MultiBackend, { TouchTransition, MouseTransition } from 'react-dnd-multi-backend';
// import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

import 'bootstrap/dist/css/bootstrap.min.css';

const HTML5toTouch = {
    backends: [
      {
        backend: TouchBackend,
        options: {
          scrollAngleRanges: [
            { start: 30, end: 150 },
            { start: 210, end: 330 }
          ]
        },
        preview: true,
        transition: TouchTransition,
      },
      {
        backend: HTML5Backend,
        transition: MouseTransition,
        preview: true
      }
    ]
  };

    ReactDOM.render(
        <Provider store={store}>
            <DndProvider backend={MultiBackend} options={HTML5toTouch}>
                <App /> 
            </DndProvider>
        </Provider>,
    document.getElementById("root")
);
