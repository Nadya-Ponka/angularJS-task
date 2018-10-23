import template from './item.html';
import itemController from './item.controller';


/* module.exports = {
  template: '<ul><li ng-repeat="item in $ctrl.lists">{{item.Name}}</li></ul>',
  controller: itemListCtrl,
  bindings: {
    lists: '=',
  }
} */

export default class ItemComponent {
	constructor() {
		this.bindings = {
			view: '<',
		}
		this.controller = itemController;
		this.template = `${template}`;
	}
}