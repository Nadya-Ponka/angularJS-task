export default function dateBorder() {
	return function (scope, elementDOM, attributes, controller) {
		const TWOWEEK = 86400000 * 14;

		let currentDate = new Date();
		let item = attributes["view"];
		let data = scope[item];

/* 		console.log(currentDate.valueOf());
		console.log(new Date(data.date).valueOf());
 */
		if (new Date(data.date).valueOf() <= currentDate.valueOf() && new Date(data.date).valueOf() > currentDate.valueOf() - TWOWEEK) {
/* 			console.log("We are here");
			console.log(elementDOM[0]);
 */
			elementDOM[0].style.borderColor = "green";
		}
		if (new Date(data.date).valueOf() > currentDate.valueOf()) {
			elementDOM[0].style.borderColor = "blue";
		}
	}
}