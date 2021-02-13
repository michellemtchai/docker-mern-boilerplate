import * as actions from '../actions/sample';

export const initialState = {
	data: {},
	error: ''
}

export const sample = (state = initialState, action)=>{
	switch (action.type) {
		case actions.SET_DATA:
			return {...state,
				data: action.data
			};
		case actions.SET_ERROR:
			return {...state,
				error: action.data
			};
		default:
		  	return state;
	}
}
