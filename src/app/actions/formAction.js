export function updateName(name) {
	return {
			type: 'UPDATE_NAME',
			name
	}
}
export function updateDate(date) {
	return {
			type: 'UPDATE_DATE',
			date
	}
}

export default { updateName, updateDate };