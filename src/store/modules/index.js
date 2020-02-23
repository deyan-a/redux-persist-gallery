import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import photos from './photos';
import status from './status';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['photos']
};
const rootReducer = combineReducers({ photos, status });

export default persistReducer(persistConfig, rootReducer);
