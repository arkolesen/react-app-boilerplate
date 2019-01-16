import { SET_CURRENT_USER } from 'redux/actions/types';
import isEmpty from 'utils/validation/is-empty';

const initialState = {
  isAuthenticated: false,
  userInfo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        userInfo: action.payload
      };
    default:
      return state;
  }
}
