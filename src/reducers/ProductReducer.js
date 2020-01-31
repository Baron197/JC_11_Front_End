import { ISI_PRODUCTS } from '../actions/types'

const INITIAL_STATE = []

export default (state=INITIAL_STATE,action) => {
    console.log('Masuk Reducer Product')
    console.log('State akhir: ', state)
    console.log('Isi variable action : ', action)
    switch(action.type) {
        case ISI_PRODUCTS:
            return action.payload
        default :
            return state
    }
}