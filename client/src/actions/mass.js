export function getData() {
    return dispatch => {
        fetch('/api')
            .then(response => response.json())
            .then(json => {
                console.log("lalalalalal");
                dispatch(resolvedGetData(json))
            })
    }
}

export function resolvedGetData(data) {
    return {
        type: 'RESOLVED_GET_DATA',
        data
    }
}