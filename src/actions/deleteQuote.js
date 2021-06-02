export const deleteQuote = (quoteId, kindId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/kinds/${kindId}/quotes/${quoteId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(kind => dispatch({type: 'DELETE_QUOTE', payload: kind}))
    }
}