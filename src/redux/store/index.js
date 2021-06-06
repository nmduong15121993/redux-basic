import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { counter } from '../reducers/count';
import { todosReducer } from '../reducers/todos';

const store = createStore(combineReducers({ counter, todosReducer }), applyMiddleware(thunk));

export { store };