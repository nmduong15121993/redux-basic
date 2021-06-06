import { COUNT } from '../constants/count';

const initData = { 
  count: 0,
  dataAsync: [], 
};

function counter(state = initData, action) {
  const {count, dataAsync }= state;
  switch (action.type) {
    case COUNT.INCREASE:
      return {...state, count: count + 1 };
    case COUNT.DECREASE:
      return {...state, count: count - 1 }; 
    case COUNT.ASYNC_TEST:
      const newDataAsync = dataAsync;
      newDataAsync.push(action.payload);
      return {...state, dataAsync: newDataAsync};

    default:
      return state;
  }
}

export { counter };