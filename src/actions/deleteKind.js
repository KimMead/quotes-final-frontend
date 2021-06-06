import {fetchKinds} from './fetchKinds';
export const deleteKind = (kindId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/kinds/${kindId}`, {
            method: 'DELETE'
        })
        // .then(response => response.json())
        .then(kind => {

            // dispatch({type: 'DELETE_KIND', payload: kind})
            fetch('http://localhost:3000/api/v1/kinds')
        .then(resp => resp.json())
        .then(kinds => dispatch({
            type: 'FETCH_KINDS',
            payload: kinds 
        }))
         })
         .catch(error => console.log(error))
    }
}