import { fetchAPIData } from '../shared/network';

export const getAllItems = (props, next = null) => {
    fetchAPIData(props, '/items', props.setData, {
        formatData: (data) => {
            return {
                items: data,
            };
        },
        next: next,
    });
};

export const createItem = (props, params, next = null) => {
    let updateItemsList = (data) => {
        props.endFetching();
        getAllItems(props, next);
    };
    fetchAPIData(props, '/items/', updateItemsList, {
        method: 'POST',
        params: params,
    });
};

export const updateItem = (props, id, params, next = null) => {
    let updateItemsList = (data) => {
        props.endFetching();
        getAllItems(props, next);
    };
    fetchAPIData(props, `/items/${id}`, updateItemsList, {
        method: 'PUT',
        params: params,
    });
};

export const removeItemById = (props, id, next = null) => {
    let updateItemsList = (data) => {
        props.endFetching();
        getAllItems(props, next);
    };
    fetchAPIData(props, `/items/${id}`, updateItemsList, {
        method: 'DELETE',
    });
};
