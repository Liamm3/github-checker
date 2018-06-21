import * as actions from "../actions/types";

const initialState = {
  user: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action) {
    case actions.FETCH_USER_START:
      return { ...state, loading: true };
    case actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: {
          ...action.payload.user
        }
      };
    case actions.FETCH_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};
