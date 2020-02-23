import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor } from './store';
import Mainlayout from './components/layouts/MainLayout';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Mainlayout />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
