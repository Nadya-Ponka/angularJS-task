import lists from './../../assets/data.ts';

export default function form(state = {	lists: lists }, action) {
	switch (action.type) {
		case 'ADD_ITEM':
			console.log("state.lists", state.lists);
			return { ...state,
				lists: action.lists
			};
		default:
			return state;
	}
}