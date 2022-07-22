const initialState = {
  items: [],
  isLoaded: false,
};

const shavermas = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SHAVERMAS":
      return {
        isLoaded: true,
        items: action.payload,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default shavermas;
