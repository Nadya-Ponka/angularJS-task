/* import angular from 'angular';
 */
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