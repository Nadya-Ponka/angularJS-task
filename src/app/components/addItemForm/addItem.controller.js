import lists from './../../../assets/data.ts';
import actions from '../../actions/formAction';

export default function addItemController($scope, $location, appService/* , $ngRedux */) {
	$scope.lists = lists;

	/* this.unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
	this.mapStateToThis = function (state) {
		return {
			user: state.form
		}
	}

	this.$onDestroy = function () {
		this.unsubscribe();
	} */

	/* $scope.addItem = function (text, price, day) {
		
		price = parseFloat(price, 10);
		if (text !== undefined && !isNaN(price) && day !== undefined) {
			$scope.lists.push({
				name: text,
				price: price,
				star: false,
				date: new Date(day).valueOf()
			});
			console.log("we are here = ", text);

			$location.path(`/`);
		}
	} */
	
	$scope.submit = function (text, price, day, form) {
		console.log("AAAAA");

		price = parseFloat(price, 10);
		if (text !== undefined && !isNaN(price) && day !== undefined) {
			$scope.lists.push({
				name: text,
				price: price,
				star: false,
				date: new Date(day).valueOf()
			});
			console.log("we are here = ", text);

			appService.sendData(form);
			$location.path(`/`);
		}
	}
}