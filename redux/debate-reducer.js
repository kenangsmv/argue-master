const INITIAL_STATE = {
  debates: [],
};

const newDebate = (debates, action) => {
  console.log(debates);
  let newArr = [...debates];
  newArr.push(action.payload);
  return newArr;
};

const debateReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case "SET_DEBATES":
      return {
        ...state,
        debates: action.payload,
      };
    case "ADD_DEBATE":
      return {
        ...state,
        debates: newDebate(state.debates, action),
      };
    default:
      return state;
  }
};

export default debateReducer;
