const mass = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TIME_MAPPING_DATA':
          return Object.assign({}, state, {timeValueData: action.data})
        default:
          return state;
    }
}

export default mass;