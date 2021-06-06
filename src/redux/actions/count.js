import { COUNT } from '../constants/count';

const increaseAction = () => ({ type: COUNT.INCREASE });

const decreaseAction = () => ({ type: COUNT.DECREASE });

const asyncAction = (data) => ({ type: COUNT.ASYNC_TEST, payload: data }); 

export { increaseAction, decreaseAction, asyncAction };