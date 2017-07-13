export function getTimeValueData(category) {
    return dispatch => {
        fetch('/map-time?category=' + category)
            .then(response => response.json())
            .then(json => {
                dispatch(resolveTimeValueData(json))
            })
    }
}

export function resolveTimeValueData(data) {
    return {
        type: 'GET_TIME_MAPPING_DATA',
        data
    }
}