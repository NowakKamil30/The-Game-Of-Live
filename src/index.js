import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import * as serviceWorker from './serviceWorker';

class Root extends Component
{
    render()
    {
        return(
            <Provider store={createStore(reducers)}>
            <App/>
            </Provider>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
