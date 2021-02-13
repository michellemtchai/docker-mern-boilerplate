import * as actions from '../actions/app';

export const initialState = {
	data: {},
	error: '',
	loaded: false
}

export const app = (state = initialState, action)=>{
	switch (action.type) {
		case actions.SET_DATA:
			return {...state,
				data: {
					items: action.data,
					loaded: true,
				}
			};
		case actions.SET_ERROR:
			return {...state,
				error: action.data,
				loaded: true,
			};
		default:
		  	return state;
	}
}