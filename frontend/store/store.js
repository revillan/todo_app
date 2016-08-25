import { createStore } from 'redux';
import reducer from '../reducers/root_reducer';
import masterMiddleware from '../middleware/master_middleware';

const configureStore = (state = {} ) => {
  return createStore(reducer, state, masterMiddleware);
};

export default configureStore;
