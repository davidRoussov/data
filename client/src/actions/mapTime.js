export function getTimeValueData() {
    return dispatch => {
        fetch('/api')
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