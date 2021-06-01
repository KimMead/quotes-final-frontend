export const addQuote = (quote, kindId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/kinds/${kindId}/quotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quote)
        })
        .then(response => response.json())
        .then(kind => dispatch({type: 'ADD_QUOTE', payload: kind}))
    }

}