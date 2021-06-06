import React from 'react';
import { connect } from 'react-redux';
import { addTodoList, deleteId } from '../../redux/actions/todos';

function ToDos({ todoReducerState, onAddTodosList, ondeleteId }) {
  const { listData } = todoReducerState;
  return (
    <div>
      <h1>Todos List</h1>
      <ul>
        {listData.map(({ id, title }) => 
          <li 
            key={id}
            onClick={() => ondeleteId(id)}
            style={{ cursor: 'pointer' }}
          >
            { title }
          </li>
          )
        }
      </ul>
      <button onClick={onAddTodosList} >Add data</button>
    </div>
  );
};

function mapSateToProps(state) {
  return {
    todoReducerState: state.todosReducer,
  }
}

function mapDispathToProps(dispatch) {
  return {
    onAddTodosList: () => {
      const randomeId = Math.trunc(Math.random() * 1000);
      const data = {
        id: randomeId,
        title: `Todo Id: ${randomeId}`,
      }
      return dispatch(addTodoList(data));
    },

    ondeleteId: (id) => dispatch(deleteId(id)),
    
  }
}

const withTodos = connect(mapSateToProps, mapDispathToProps)(ToDos);

export default withTodos;