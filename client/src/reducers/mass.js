const mass = (state = [], action) => {
    switch (action.type) {
        case 'GET_MASS_HISTORY':
          return Object.assign({}, state, {massHistory: action.data})
        default:
          return state;
    }
}

export default mass;