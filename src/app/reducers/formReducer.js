export default function form(state = {date: false}, action) {
	switch (action.type) {
			case 'UPDATE_NAME':
			console.log(state);
					return {...state, name: action.name};
			case 'UPDATE_DATE':
					return {...state, date: action.date};
			default:
					return state;
	}
}