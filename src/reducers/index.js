import { combineReducers } from 'redux';
import reposReducer from './ReposReducer';

const rootReducer = combineReducers({
  repos: reposReducer
});

export default rootReducer;
