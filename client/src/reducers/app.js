const app = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MAPPING':
          return {...state, mapTimeVisible: true };
        default:
          return state;
    }
}

export default app;