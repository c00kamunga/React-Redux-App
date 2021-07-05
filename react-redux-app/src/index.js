import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; 


import { createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import { Provider } from "react-redux";
import { reducer } from './reducer/reducer';
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk)
  );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>,
  document.getElementById("root")
);
