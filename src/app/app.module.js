import angular from 'angular';
import ngRoute from 'angular-route';
import ngRedux from 'ng-redux';
import { combineReducers,	createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import HeaderComponent from './components/header/header.component';
import ListComponent from './components/itemsList/lists.component';
import ItemComponent from './components/item/item.component';
import filterSearchElement from './components/itemsList/lists.filter';
import dateBorder from './components/itemsList/lists.directive';
import itemPageController from './components/itemPage/itemPage.controller';
import appService from './app.service';
import mainController from './app.controller';
import addItemComponent from './components/addItemForm/addItem.component';
import addItemController from './components/addItemForm/addItem.controller';
import minmaxDate from './components/addItemForm/addItem.directive';
import reducer from './reducers/formReducer';

import template from './components/itemPage/itemPage.html';
import templateForm from './components/addItemForm/addItem.html';

const store = createStore(reducer, applyMiddleware(createLogger()));

var app = angular.module('myApp', [ngRoute, ngRedux])
	.config(($routeProvider, $locationProvider, $ngReduxProvider) => {
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
		
		$ngReduxProvider.provideStore(store);
	})
	.service('appService', appService)
	.controller('mainController', mainController)
	.controller('itemPageController', itemPageController)
	.controller('addItemController', addItemController)
	.component('headerComponent', new HeaderComponent())
	.component('listComponent', new ListComponent())
	.component('itemComponent', new ItemComponent())
	.component('addItemComponent', new addItemComponent())
	.filter('filterSearchElement', filterSearchElement)
	.directive('dateBorder', dateBorder)
	.directive('minmaxDate', minmaxDate);

console.log("I am entry point of SPA");