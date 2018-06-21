import * as actions from "./types";

export const fetchUser = name => async dispatch => {
  dispatch(fetchUserStart());
  try {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const user = await response.json();

    console.log(user);
    dispatch(fetchUserSuccess(user));
  } catch (error) {
    dispatch(fetchUserFail(error));
  }
};

export const fetchUserStart = () => ({ type: actions.FETCH_USER_START });

const fetchUserSuccess = user => ({
  type: actions.FETCH_USER_SUCCESS,
  payload: {
    user
  }
});

const fetchUserFail = error => ({
  type: actions.FETCH_USER_FAIL,
  payload: {
    error
  }
});
