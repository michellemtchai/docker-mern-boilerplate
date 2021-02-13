import { fetchAPIData } from '../shared/network';

export const getAllItems = (props)=>{
    fetchAPIData(props, '/items', 'setData', {
        formatData: (data)=>{
            return {
                items: data
            }
        }
    });
}

