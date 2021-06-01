// responsible for updating the part of our store that has to do with the kind.  It's a function!!

export default function kindReducer(state = {kinds: []}, action) {

    switch (action.type) {
        case 'FETCH_KINDS':
            return {kinds: action.payload}
        case 'ADD_KIND':
            return {...state, kinds: [...state.kinds, action.payload]}
        default: 
            return state 

    }
}
