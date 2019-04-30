import axios from 'axios';


export function axiosGet(url, data) {
    return axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/${url}`,
        data
    }).catch((error)  => {
        return error;
    });
}