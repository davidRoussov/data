const app = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MAPPING':
          return {...state, mapTimeVisible: true };
        case 'SHOW_SPINNER':
          return { ...state, pageSpinner: true };
        case 'HIDE_SPINNER':
          return { ...state, pageSpinner: false };
        default:
          return state;
    }
}

export default app;