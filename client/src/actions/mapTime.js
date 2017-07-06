export function getTimeValueData(category) {
    console.log("action category", category);
    return dispatch => {
        fetch('/map-time?category=' + "mass")
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