import { fetchKinds } from './fetchKinds';
export const deleteKind = (kindId) => {
console.log("deleteKind")

    return (dispatch) => {
        dispatch({ type: 'DELETE_KIND_REQUEST' })
        fetch(`http://localhost:3000/api/v1/kinds/${kindId}`, {
            method: 'DELETE'
        })
            // .then(response => response.json())
            .then(res => {
                console.log(res)
                dispatch({ type: 'DELETE_KIND_SUCCESS' })
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
                dispatch({ type: 'DELETE_KIND_FAIL' })
            })
    }
}