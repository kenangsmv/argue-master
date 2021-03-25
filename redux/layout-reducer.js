


const INITIAL_STATE = {
   auth_modal:false,

  };

 
  
  const LayoutReducer = (state = INITIAL_STATE, action) => {
      console.log(state)
    switch (action.type) {
      case "SET_MODAL":
        return {
          ...state,
         auth_modal:action.payload
        };
      
      default:
        return state;
    }
  };
  
  export default LayoutReducer;