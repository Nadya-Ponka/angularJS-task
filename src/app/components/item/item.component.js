import template from './item.html';
import itemController from './item.controller';

export default class ItemComponent {
	constructor() {
		this.bindings = {
			view: '<',
		}
		this.controller = itemController;
		this.template = `${template}`;
	}
}