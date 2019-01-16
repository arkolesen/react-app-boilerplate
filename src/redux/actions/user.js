import axios from 'axios';
import { ERROR, SET_CURRENT_USER } from './types';

export const example = (user, history) => dispatch => {
  axios
    .post('/api/users/register', user)
    .then(() => history.push('/login'))
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err.response.data
      });
    });
};

export const setCurrentUser = decodedUser => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedUser
  };
};

export const logoutUser = history => dispatch => {
  // remove token here

  dispatch(setCurrentUser({}));
  history.push('/login');
};
