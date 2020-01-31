import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';

export default combineReducers({
    listProducts: ProductReducer,
    title: (state='Purwadhika',action) => {
        console.log('Masuk Reducer Title')
        console.log('State akhir: ' + state)
        console.log('Isi variable action : ', action)
        if(action.type === 'UBAH_TITLE') {
            return action.payload
        }
        else {
            return state
        }
    }
})