// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

//TYPES
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

//ACTION BUILDERS
export function increment(amount) {
    return {
        type: INCREMENT,
        payload: amount
    }
}

export function decrement(amount) {
    return {
        type: DECREMENT,
        payload: amount
    }
}

const initialState = {
    currentValue: 0
}

export default function reducer( state = initialState, action ) {

    switch(action.type) {
        case INCREMENT:
            let sum = state.currentValue + action.payload;
            return Object.assign( {}, state, { currentValue: sum} )
        case DECREMENT:
            let difference = state.currentValue - action.payload;
            return Object.assign( {}, state, { currentValue: difference } )
    }
}