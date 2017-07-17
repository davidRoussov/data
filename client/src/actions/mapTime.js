export function getTimeValueData(category) {
  return dispatch => {
    fetch('/map-time?category=' + category)
      .then(response => response.json())
      .then(data => {
          dispatch({
            type: 'GET_TIME_MAPPING_DATA',
            data
          })
      });
  }
}

export function createNewValue(category, newValue) {
  return dispatch => {
    fetch('/map-time-create-value', {
      method: 'POST',
      body: JSON.stringify({
        category,
        newValue
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      fetch('/map-time?category=' + category)
        .then(response => response.json())
        .then(data => {
            dispatch({
              type: 'GET_TIME_MAPPING_DATA',
              data
            })
        });
    });
  }
}