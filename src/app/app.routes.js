import template from './components/itemPage/itemPage.html';
import templateForm from './components/addItemForm/addItem.html';
import itemPageController from './components/itemPage/itemPage.controller';
import ListComponent from './components/itemsList/lists.component';
import mainController from './app.controller';
import addItemController from './components/addItemForm/addItem.controller';

export default function routes($routeProvider) {
	$routeProvider.when('/item/:id', {
		template: `${template}`,
		controller: 'itemPageController'
	});
	$routeProvider.when('/', {
		template: '<list-component></list-component><br/><br/><h2>Получение данных со стороннего API с помощью сервиса через $http:</h2><div ng-controller="mainController"><span ng-repeat="elem in question">{{elem.Name}}, </span></div>',
		controller: 'mainController'

	});
	$routeProvider.when('/form', {
		template: `${templateForm}`,
		controller: 'addItemController'
	});
	$routeProvider.otherwise('/');
};