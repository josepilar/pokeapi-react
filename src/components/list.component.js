import React, {useState, useEffect} from 'react';
import {axiosGet} from '../helpers/axions.helper';

export default function ThingList(props) {
    const {url} = props;
    
    let [itemList, success]= useState([]);
    useEffect(() => {
        axiosGet(url).then((result => {
            success(result.data.results);
        }));
    }, [url]);
    return (
        <ul>
            {itemList.map((item) => {
                return <li key={item.name}>{item.name}</li>
            })}
        </ul>
    );
}