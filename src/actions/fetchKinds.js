
export function fetchKinds() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/kinds')
        .then(resp => resp.json())
        .then(kinds => dispatch({
            type: 'FETCH_KINDS',
            payload: kinds 
        }))
    }
}
