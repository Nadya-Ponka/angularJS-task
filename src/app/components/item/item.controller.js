export default function itemController($scope) {
	$scope.changeStar = function (event, elem) {
		event.stopPropagation();
		elem.star = !elem.star;
	}
}