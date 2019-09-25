import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/containers/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// REDUX
import { rootReducer } from './app/store/reducers/root.reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const looger = (store: { getState: () => void }) => {
  return (next: (arg0: any) => void) => {
    return (action: any) => {
      const result = next(action);
      return result;
    };
  };
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, looger))
);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
