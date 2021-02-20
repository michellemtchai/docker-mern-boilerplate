import * as items from '../api/items';

export const fetch = {
    ...items,
}

let fetchList = [
    fetch.getAllItems
];

export const fetchAll = (props)=>{
    fetchList.forEach(getData=>getData(props));
}