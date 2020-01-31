import axios from 'axios';
import { ISI_PRODUCTS } from './types';
import { API_URL_1 } from '../helpers/apiurl';

export const ubahTitle = (newtitle) => {
    return {
        type: 'UBAH_TITLE',
        payload: newtitle
    }
}

export const getProducts = () => {
    return (dispatch) => {
        axios.get(API_URL_1 + `/products`)
        .then((res) => {
            console.log(res.data)
            dispatch({
                type: ISI_PRODUCTS,
                payload: res.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}