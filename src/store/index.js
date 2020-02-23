import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { persistStore } from 'redux-persist';
import rootReducer from './modules';

const middleware = applyMiddleware(promise, thunk);
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(middleware));
const persistor = persistStore(store);

export default { store, persistor };
