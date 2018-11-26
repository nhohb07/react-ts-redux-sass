import { createStore, combineReducers } from 'redux';
import { StoreState } from './types/StoreState';

import {
  requestReducer
} from './reducers';

const appReducer = combineReducers<StoreState>({
  request: requestReducer
});

export default createStore(appReducer);