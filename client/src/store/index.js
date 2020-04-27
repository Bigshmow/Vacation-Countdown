import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// Reducers
import data from './data';

// Sagas configuration
// const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//   process.env.NODE_ENV !== 'production' &&
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         name: 'main'
//       })
//     : compose;

// data (roomList, furnitureList) (API Data)
// drag-n-drop (item dragged, activeRoom, ) (Managed by )
// userData (profile)
// quiz (questions)

// Store configuration
const store = createStore(
  combineReducers({ data }),
  composeEnhancers(applyMiddleware())
);


export default store;