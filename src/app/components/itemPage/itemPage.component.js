import angular from 'angular';

import template from './itemPage.html';
import itemPageController from './itemPage.controller';

export default class ItemPageComponent {
	constructor() {
		this.template = `${template}`;
		this.controller = itemPageController;
		this.bindings = {
			lists: '<',
		}
	}
}