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

export function createNewMapping(newMappingName) {
  return dispatch => {
    fetch('/map-time-create-mapping', {
      method: 'POST',
      body: JSON.stringify({
        newMappingName
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      dispatch({
        type: 'GET_MAP_TIME_TOPICS'
      });
    });
  };
}

export function getMappings() {
  return dispatch => {
    fetch('/map-time-mappings')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'GET_MAPPINGS',
          data
        });
      });
  };
};

export function setCurrentMapping(mapping) {
  return dispatch => {
    dispatch({
      type: 'SET_MAPPING',
      mapping
    });
  }
};