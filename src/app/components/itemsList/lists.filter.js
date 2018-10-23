export default function filterSearchElement() {
	return function (arr, str) {
		let filteredArray = [];
		
		arr.forEach((elem, index) => {
			if (str == undefined) {
				filteredArray = arr;
			} else {
				if (elem.name.toUpperCase().indexOf(str.toUpperCase()) > -1) {
					filteredArray.push(elem);
				}
			}
		});
		return filteredArray;
	}
}