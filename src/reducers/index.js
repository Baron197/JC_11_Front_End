import { combineReducers } from 'redux';

export default combineReducers({
    title: (state='Purwadhika',action) => {
        console.log('Masuk Reducer Title')
        console.log('State akhir: ' + state)
        console.log('Isi variable action : ', action)
        if(action.type == 'UBAH_TITLE') {
            return action.payload
        }
        else {
            return state
        }
    },
    judul: (state='Avengers',action) => {
        console.log('Masuk Reducer Judul')
        console.log('State akhir: ' + state)
        console.log('Isi variable action : ', action)
        if(action.type == 'UBAH_JUDUL') {
            return action.payload
        }
        else {
            return state
        }
    }
})