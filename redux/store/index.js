import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { createStore } from 'redux';

import { rootReducer } from '../reducers/index';

export const store = createStore(rootReducer, applyMiddleware(thunk));
// export const store = createStore(rootReducer);
