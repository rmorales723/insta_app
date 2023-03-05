import ReactDOM from 'react-dom'
import React from 'react'
import App from './App';
import {Provider} from 'react-redux';
import {configureStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));