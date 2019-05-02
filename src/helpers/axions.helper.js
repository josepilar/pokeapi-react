import axios from 'axios';


export function axiosGet(url, data, params) {
    url = url.replace('https://pokeapi.co/api/v2/', '');
    return axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/${url}`,
        data,
        params: {
            limit: 15,
            ...params
        }
    }).catch((error)  => {
        return error;
    });
}