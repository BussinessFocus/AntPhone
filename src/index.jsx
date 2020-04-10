import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import Index from './routers'
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();

