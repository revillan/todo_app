import {REQUEST_TODOS, RECEIVE_TODOS} from '../actions/todo_actions';
import { fetchTodos } from '../util/todo_api_util';
import receiveTodos from '../actions/todo_actions';

const TodosReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      console.log("here");
      return action.todos;
    default:
      return state;
  }
};

export default TodosReducer;
