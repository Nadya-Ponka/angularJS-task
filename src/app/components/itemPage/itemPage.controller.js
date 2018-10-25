export default function itemPageController($scope, $routeParams) {
	$scope.data = $routeParams.id.split("?");
	if ($scope.data[3] === "false") $scope.data[3] = false;
	console.log('item = ', $scope.data);
}