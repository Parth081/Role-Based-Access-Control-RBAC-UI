import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import roleReducer from './reducers/roleReducer';

const rootReducer = combineReducers({
  users: userReducer,
  roles: roleReducer,
});

const store = createStore(rootReducer);

export default store;
