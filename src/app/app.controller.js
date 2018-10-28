export default function mainController($scope, appService) {
	this.$onInit = function () {
		let promiseObj = appService.getData();
		promiseObj.then(function (value) {
			$scope.question = value;
		});
	}
}