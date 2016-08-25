import { combineReducers } from 'redux';
import TodosReducer from './todos_reducer';


const reducer = combineReducers({
  todos: TodosReducer
});

export default reducer;
