const mapTime = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TIME_MAPPING_DATA':
          return Object.assign({}, state, {timeValueData: action.data});
        case 'GET_MAPPINGS':
          return Object.assign({}, state, {mappings: action.data});
        case 'SET_MAPPING':
          return {...state, currentMapping: action.mapping };
        default:
          return state;
    }
}

export default mapTime;