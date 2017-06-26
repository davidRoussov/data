export function getMassHistory() {
    return dispatch => {
        fetch('/api')
            .then(response => response.json())
            .then(json => {
                dispatch(resolvedMassHistory(json))
            })
    }
}

export function resolvedMassHistory(data) {
    return {
        type: 'GET_MASS_HISTORY',
        data
    }
}