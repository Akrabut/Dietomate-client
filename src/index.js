import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { store } from './store'
import 'semantic-ui-css/semantic.min.css'
import Home from './components/Home'

ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();