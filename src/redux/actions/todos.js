import { TODOS } from '../constants/todos';

const addTodoList = (data) => ({ type: TODOS.ADD, payload: data });

const deleteId = (id) => ({ type: TODOS.DELETE, id: id });

export { addTodoList, deleteId };