import React from 'react';
import { connect } from 'react-redux';
import { increaseAction, decreaseAction, asyncAction } from './redux/actions/count';
import { fetchCounterService } from './redux/services/counter';
import HomePage from './pages/homepage';
import ToDos from './pages/todos';

function App({ counter, onIncreaseClick, onDecreaseClick, onAsyncAction }) {
  const { count, dataAsync} = counter;
  console.log(dataAsync);
  return (
    <div>
      <h1> Redux </h1>
      <div>Count: { count } </div>
      <button onClick={onIncreaseClick} > Icrease + </button>
      <button onClick={onDecreaseClick}> decrease -  </button>
      <br/>
      <ul>
        {dataAsync.map(({ id, name, value }, index) => 
          <li 
          key={index}
          >
            id:{id} - name: {name} - value: {value} 
          </li>
        )}
      </ul>
      <button onClick={onAsyncAction}>Async Test</button>

      <HomePage />
      <ToDos />
    </div>
  );
};


function mapSateToProps(state) {
  return {
    counter: state.counter,
  }
}

function mapDispathToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction()),
    onDecreaseClick: () => dispatch(decreaseAction()),
    onAsyncAction: async () => {
      try {
        const {data} = await fetchCounterService();
        dispatch(asyncAction(data));
      } catch (error) {
        console.log(error);
      }
    }

  }
}

const withApp = connect(
  mapSateToProps,
  mapDispathToProps,
)(App);

export default withApp;
