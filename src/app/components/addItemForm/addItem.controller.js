import lists from './../../../assets/data.ts';

export default function addItemController($scope, $location) {
	$scope.lists = lists;

	$scope.addItem = function (text, price) {
		console.log("we are here = ", text);
		
		price = parseFloat(price, 10);
		if (text !== undefined && !isNaN(price)) {
			$scope.lists.push({
				name: text,
				price: price,
				star: false,
				date: new Date()
			});

			$location.path(`/`);
		}
	}
}