import { createStore, combineReducers } from 'redux';
import { StoreState } from './types/StoreState';

import {
  spinner
} from './reducers';

const appReducer = combineReducers<StoreState>({
  spinner,
});

export default createStore(appReducer);