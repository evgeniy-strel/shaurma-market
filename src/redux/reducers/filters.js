const initialState = {
  category: "Все",
  sortBy: "популярности",
};

const filters = (state = initialState, action) => {
  if (action.type == "SET_SORT_BY") {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type == "SET_SORT_CATEGORY") {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export default filters;
