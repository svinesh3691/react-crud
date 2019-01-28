const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function userReducer(state = initialState, action) {
    switch(action.type) {
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
  
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }