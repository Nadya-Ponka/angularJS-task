export default function minmaxDate() {
	const ONEYEAR = 86400000 * 365;
	const CURRENTDATE = new Date().valueOf();

	return {
		restrict: 'A',
		require: 'ngModel',
		link: (scope, element, attrs, controller) => {
			controller.$validators.forbiddenDate = (date) => {
				return (new Date(date).valueOf() > CURRENTDATE - ONEYEAR && new Date(date).valueOf() < CURRENTDATE + ONEYEAR);
			};
		}
	}
}