import lists from '../../../assets/data.ts';

export default function myController($scope,  $location) {
	$scope.lists = lists;
	$scope.location = $location;

	$scope.goToItem = function (item) {
		$location.path(`/item/${item.id}?${item.name}?${item.price}?${item.star}?${item.date}`);
	}

	$scope.goToForm = function() {
		$location.path('/form');
	}
}