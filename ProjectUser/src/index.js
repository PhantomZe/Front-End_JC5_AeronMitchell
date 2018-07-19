import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';


var initialState = {
    userid: 0,
};
function reducer(state = initialState, action) {
  switch (action.type) {
          case 'Login' :
          return {
              userid: action.userid
          }
          default:
          return state;
      }

}

const store = createStore(reducer);
// End of Reducers



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();