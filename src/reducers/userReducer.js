const initialState = {
  items: [],
  loading: false,
  error: null,
  selected: {
    'id': 0
  },
  selecting: false,
  select_error: null
};

export default function userReducer(state = initialState, action) {

  switch (action.type) {
    case 'FETCH_USERS_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      };

    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        items: action.payload.users
      };

    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        loading: false,
        items: []
      };


    case 'SELECT_USER_BEGIN':
      return {
        ...state,
        selecting: true,
        select_error: null
      };

    case 'SELECT_USER_SUCCESS':
      return {
        ...state,
        selecting: false,
        selected: action.payload.user
      };

    case 'SELECT_USER_FAILURE':
      return {
        ...state,
        select_error : action.payload.error,
        selecting: false,
        selection: false
      };





    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}