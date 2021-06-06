// responsible for updating the part of our store that has to do with the kind.  It's a function!!

export default function kindReducer(state = {kinds: []}, action) {

    switch (action.type) {
        case 'FETCH_KINDS':
            return {kinds: action.payload}
        case 'ADD_KIND':
            return {...state, kinds: [...state.kinds, action.payload]}
        case 'ADD_QUOTE':
        let kinds = state.kinds.map(kind => {
                if (kind.id === action.payload.id) {
                    return action.payload
                } else {
                    return kind 
                }
            })
            return {...state, kinds: kinds}
        case 'DELETE_QUOTE':
            let kindsTwo = state.kinds.map(kind => {
                if (kind.id === action.payload.id) {
                    return action.payload
                } else {
                    return kind 
                }
            })
            return {...state, kinds: kindsTwo}
        case 'EDIT_KIND':
        let kindsThree = state.kinds.map(kind => {
            if (kind.id === action.payload.id) {
                return action.payload
            } else {
                return kind 
            }
        })
            return {...state, kinds: kindsThree}
        case 'DELETE_KIND':
            let kindsFour = state.kinds.map(kind => {
                if (kind.id === action.payload.id) {
                    return action.payload
                } else {
                    return kind
                }
            })
            return {...state, kinds: kindsFour}

        case 'SET_KIND_ID':
            localStorage.setItem("currentKindId", action.payload)
            return {...state, kindId: action.payload}
        default: 
            return state 
    }
}
