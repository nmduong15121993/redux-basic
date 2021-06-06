import React from 'react';
import { connect } from 'react-redux';
import { increaseAction, decreaseAction } from '../../redux/actions/count';

function HomePage({ increaseAct, decreaseAct }) {
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={increaseAct}>Change Increase + Child Component</button>
      <button onClick={decreaseAct}>Change Decrease - Child Component</button>
    </div>
  )
}


function mapDispathToProps(dispatch) {
  return {
    increaseAct: () => dispatch(increaseAction()),
    decreaseAct: () => dispatch(decreaseAction()),
  }
}

const withHomePage = connect(
  null,
  mapDispathToProps,
)(HomePage)

export default withHomePage;