import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './lists.routers.js';
import template from './lists.html';
import myController from './lists.controller';

export default class ListComponent {
	constructor() {
		this.template = `${template}`;
		this.controller = myController;
		this.bindings = {
			lists: '=',
		}
	}
}