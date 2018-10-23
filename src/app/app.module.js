import angular from 'angular';
import uirouter from 'angular-ui-router';

import HeaderComponent from './components/header/header.component';
import ListComponent from './components/itemsList/lists.component';
import ItemComponent from './components/item/item.component';
import filterSearchElement from './components/itemsList/lists.filter';
import dateBorder from './components/itemsList/lists.directive';
import appService from './app.service';
import mainController from './app.controller';
import routes from './app.routes';


var app = angular.module('myApp', [uirouter])
	.config(routes)
	.service('appService', appService)
	.controller('mainController', mainController)
	.component('headerComponent', new HeaderComponent())
	.component('listComponent', new ListComponent())
	.component('itemComponent', new ItemComponent())
	.filter('filterSearchElement', filterSearchElement)
	.directive('dateBorder', dateBorder);

console.log("I am entry point of SPA");