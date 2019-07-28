import { handleActions } from 'redux-actions';

import actionTypes from '../actions/actions-types';

export default handleActions({
  [actionTypes.ROUTER]: (state, { payload }) => {
    return { ...state, ...{ router: payload } };
  },
}, {});
