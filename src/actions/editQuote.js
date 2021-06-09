export const editQuote = (data) => {
    
    return (dispatch) => {
        dispatch({type: 'EDIT_QUOTE_REQUEST'})
        fetch(`http://localhost:3000/api/v1/kinds/${data.kindId}/quotes/${data.quoteId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(kind  => {
            console.log(kind)
            dispatch({type: 'EDIT_QUOTE_SUCCESS'})
            fetch('http://localhost:3000/api/v1/kinds')
            .then(resp => resp.json())
            .then(kinds => dispatch({
                type: 'FETCH_KINDS',
                payload: kinds 
            }))
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: 'EDIT_QUOTE_FAIL' })
        })
    }
}