import lists from '../../../assets/data.ts';

export default function myController($scope,  $location) {
	$scope.lists = lists;
	$scope.location = $location;

	$scope.addItem = function (text, price) {
		price = parseFloat(price, 10); 
		if (text != "" && !isNaN(price)) 
		{
			$scope.lists.push({
				name: text,
				price: price,
				done: false,
				date: new Date()
			});
		}
	}

	$scope.searchItem = function (search) {
		if (text != "" && !isNaN(price)) 
		{
			$scope.lists.push({
				name: text,
				price: price,
				done: false
			});
		}
	}
	$scope.goToItem = function (item) {
		$location.path(`/item/${item.id}?${item.name}?${item.price}?${item.star}?${item.date}`);
	}
}