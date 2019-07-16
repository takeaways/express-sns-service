import React from 'react';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import reducer from '../reducers';

//공통 적으로 들어가는!!
const Main = ({Component, store}) => {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component/>
      </AppLayout>
    </Provider>
  );
}

Main.propTypes = {
  Component: PropTypes.elementType,
  store:PropTypes.object,
}


export default withRedux((initialState, options)=>{

  //여기 부터는 기능 추가
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer &&
    window.__REDUX_DEVETOOLS_EXTENSION__
    !== 'undefined' ?
    window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f) //compose 미들웨어 합성
  //
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(Main);
