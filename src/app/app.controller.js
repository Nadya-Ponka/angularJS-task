export default function mainController($scope, appService) {
	let promiseObj = appService.getData();
	promiseObj.then(function (value) {
		$scope.question = value;
	});
}