import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import {store, persistor } from './store';
import Mainlayout from './components/layouts/MainLayout';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <PersistGate loading={null} persistor={persistor}>
                <Mainlayout />
            </PersistGate>
        </Router>
    </Provider>,
    document.getElementById('root')
);
