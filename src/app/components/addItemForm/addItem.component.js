import template from './addItem.html';
import addItemController from './addItem.controller';

export default class addItemComponent {
	constructor() {
		this.controller = addItemController;
		this.template = `${template}`;
	}
}