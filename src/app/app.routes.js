import template from './components/itemPage/itemPage.html';
import itemPageController from './components/itemPage/itemPage.controller';
import ListComponent from './components/itemsList/lists.component';
import mainController from './app.controller';

export default function routes($routeProvider) {
	$routeProvider.when('/item/:id', {
		template: `${template}`,
		controller: 'itemPageController'
	});
	$routeProvider.when('/', {
		template: '<list-component></list-component><br/><br/><h2>Получение данных со стороннего API с помощью сервиса через $http:</h2><div ng-controller="mainController"><span ng-repeat="elem in question">{{elem.Name}}, </span></div>',
		controller: 'mainController'

		})
	$routeProvider.otherwise('/');
};