

const INITIAL_STATE = {
  currentUser: null,
};


const userReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case "REMOVE_USER":
      return {
        ...state,
        currentUser: null,
      };
    case "ADD_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
