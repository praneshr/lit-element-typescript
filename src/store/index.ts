import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialStore from './initial-store';
import reducer from '../reducers';

export default createStore(reducer, initialStore, applyMiddleware(thunk));
