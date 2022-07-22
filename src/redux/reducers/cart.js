const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getSizeLavash = (item) => {
  return item.size + item.lavash;
};

const getClonedItems = (items) => {
  return JSON.parse(JSON.stringify(items));
};

const getCountItemsWithSizeLavash = (state, item) => {
  return state.items[item.id][item.size + item.lavash].length;
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SHAVERMA_TO_CART":
      var sizeLavash = getSizeLavash(action.payload);
      const oldItemsCurrentId = state.items[action.payload.id]
        ? state.items[action.payload.id][sizeLavash]
        : [];
      const newItemsCurrentId = oldItemsCurrentId
        ? [...oldItemsCurrentId, action.payload]
        : [action.payload];

      var newItems = {
        ...state.items,
        [action.payload.id]: {
          ...state.items[action.payload.id],
          [sizeLavash]: newItemsCurrentId,
          totalCount: state.items[action.payload.id]
            ? state.items[action.payload.id].totalCount + 1
            : 1,
        },
      };

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice + action.payload.price,
        totalCount: state.totalCount + 1,
      };
    case "CLEAR_ALL_CART":
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    case "DELETE_ITEM_FROM_CART":
      var sizeLavash = getSizeLavash(action.payload);
      var clonedItems = getClonedItems(state.items);
      var countItem = getCountItemsWithSizeLavash(state, action.payload);
      if (Object.keys(clonedItems[action.payload.id]).length === 2) {
        delete clonedItems[action.payload.id];
      } else {
        delete clonedItems[action.payload.id][sizeLavash];
        clonedItems[action.payload.id].totalCount =
          clonedItems[action.payload.id].totalCount - countItem;
      }
      return {
        items: clonedItems,
        totalPrice: state.totalPrice - action.payload.price * countItem,
        totalCount: state.totalCount - countItem,
      };
    case "MINUS_ITEM_TO_CART":
      var sizeLavash = getSizeLavash(action.payload);
      var clonedItems = getClonedItems(state.items);
      var countItem = getCountItemsWithSizeLavash(state, action.payload);
      if (countItem !== 1) {
        const itemsOneLess =
          clonedItems[action.payload.id][sizeLavash].slice(1);
        clonedItems[action.payload.id][sizeLavash] = itemsOneLess;
        clonedItems[action.payload.id].totalCount =
          clonedItems[action.payload.id].totalCount - 1;
      }
      return {
        items: clonedItems,
        totalPrice:
          countItem === 1
            ? state.totalPrice
            : state.totalPrice - action.payload.price,
        totalCount: countItem === 1 ? state.totalCount : state.totalCount - 1,
      };
    case "PLUS_ITEM_TO_CART":
      var sizeLavash = getSizeLavash(action.payload);
      var clonedItems = getClonedItems(state.items);
      clonedItems[action.payload.id][sizeLavash].push(action.payload);
      clonedItems[action.payload.id].totalCount =
        clonedItems[action.payload.id].totalCount + 1;
      return {
        items: clonedItems,
        totalPrice: state.totalPrice + action.payload.price,
        totalCount: state.totalCount + 1,
      };
    default:
      return state;
  }
};

export default cart;
