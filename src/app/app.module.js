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
import routes from './app.routes';
import addItemComponent from './components/addItemForm/addItem.component';
import addItemController from './components/addItemForm/addItem.controller';
import minmaxDate from './components/addItemForm/addItem.directive';
/* import reducer from './reducers/formReducer';
 */
routes.$inject = ['$routeProvider'];

/* const store = createStore(reducer, applyMiddleware(createLogger()));
 */
var app = angular.module('myApp', [ngRoute, ngRedux])
	.config(routes/* , ($locationProvider, $stateProvider, $ngReduxProvider) => {
		$ngReduxProvider.provideStore(store);
	} */)
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