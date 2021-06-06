// export const editQuote = (data) => {
    
//     return (dispatch) => {
//         fetch(`http://localhost:3000/api/v1/kinds/${kindId}/quotes/${quoteId}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             },
//             method: 'PATCH',
//             body: JSON.stringify(data)
//         })
//         .then(response => response.json())
//         .then(kind => dispatch({type: 'EDIT_QUOTE', payload: kind.quote}))
//     }
// }