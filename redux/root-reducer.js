import { combineReducers } from 'redux';

import storage from 'redux-persist/lib/storage';

import userReducer from './user.reducer';
import debateReducer from './debate-reducer';
import LayoutReducer from "./layout-reducer"


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
  blacklist: ['debates','layout']
};



const rootReducer = combineReducers({
  user: userReducer,
  debates:debateReducer,
  layout:LayoutReducer
  
});

export default rootReducer;
