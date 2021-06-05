export const deleteKind = (kindId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/kinds/${kindId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(kind => dispatch({type: 'DELETE_KIND', payload: kind}))
    }
}