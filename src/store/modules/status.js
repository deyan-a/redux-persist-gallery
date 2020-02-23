import createStatusReducer from '../reducerFactories/createStatusReducer';
import { GET_ALL_PHOTOS } from './photos';

export default createStatusReducer([{ action: GET_ALL_PHOTOS }]);
