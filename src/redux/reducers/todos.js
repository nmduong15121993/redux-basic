import { TODOS } from '../constants/todos';

const initialState  = {
  listData: [],
  active: null,
  checkbox: false,
}

function todosReducer(state = initialState, action) {
  const { listData } = state;

  switch (action.type) {
    case TODOS.ADD:
      const newListData = [...listData];
      newListData.push(action.payload);
      return { ...state, listData: newListData };

    case TODOS.DELETE:
      const newList = listData.filter((item) => item.id !== action.id);
      return { ...state, listData: newList };

    default:
      return state;
  }
}

export { todosReducer };