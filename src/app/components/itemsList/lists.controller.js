import lists from '../../../assets/data.ts';

export default function myController($scope) {
	$scope.lists = lists;

	$scope.addItem = function (text, price) {
			price = parseFloat(price,10); // преобразуем введенное значение к числу
			if(text != "" && !isNaN(price)) // если текст установлен и введено число, то добавляем
			{
					$scope.lists.push({ name: text, price: price, done: false, date: new Date() });
			}
	}

	$scope.searchItem = function (search) {
		
		if(text != "" && !isNaN(price)) // если текст установлен и введено число, то добавляем
		{
				$scope.lists.push({ name: text, price: price, done: false });
		}
}
}