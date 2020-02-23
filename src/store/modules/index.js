import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import photos from './photos';

const persistConfig = {
    key: 'root',
    storage
};
const rootReducer = combineReducers({ photos });

export default persistReducer(persistConfig, rootReducer);
