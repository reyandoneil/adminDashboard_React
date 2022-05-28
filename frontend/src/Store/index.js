
import { applyMiddleware, createStore } from 'redux'
// import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import loggerMiddleware from './logger'
import monitorReducerEnhancer from './monitorReducer.js'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Reducer';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default function configureAppStore(preloadedState) {
    const middleware = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middleware)
    const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
    const composeEnhancer = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, preloadedState, composeEnhancer)

    return store
}


// export default store