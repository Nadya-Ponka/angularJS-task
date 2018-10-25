import angular from 'angular';
import ngRoute from 'angular-route';

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

routes.$inject = ['$routeProvider'];

var app = angular.module('myApp', [ngRoute])
	.config(routes)
	.service('appService', appService)
	.controller('mainController', mainController)
	.controller('itemPageController', itemPageController)
	.controller('addItemController', addItemController)
	.component('headerComponent', new HeaderComponent())
	.component('listComponent', new ListComponent())
	.component('itemComponent', new ItemComponent())
	.component('addItemComponent', new addItemComponent())
	.filter('filterSearchElement', filterSearchElement)
	.directive('dateBorder', dateBorder);

console.log("I am entry point of SPA");