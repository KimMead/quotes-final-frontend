
export const addKind = (data) => {
    
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/kinds', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(kind => dispatch({type: 'ADD_KIND', payload: kind}))
    }
}