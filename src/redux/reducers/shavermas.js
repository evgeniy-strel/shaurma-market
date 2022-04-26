const initialState = {
    items: [],
    isLoaded: false,
};

const shavermas = (state = initialState, action) => {
    if (action.type == 'SET_SHAVERMAS') {
        return {
            isLoaded: true,
            items: action.payload,
        };
    }
    return state;
}

export default shavermas;