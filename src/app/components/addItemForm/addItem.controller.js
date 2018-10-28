import lists from './../../../assets/data.ts';
import actions from '../../actions/formAction';

export default function addItemController($scope, $location, appService, $ngRedux) {
	$scope.lists = lists;

	this.unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);

	this.mapStateToThis = function (state) {
		return {
			lists: state.lists
		}
	}

	this.$onDestroy = function () {
		this.unsubscribe();
	}

	$scope.submit = function (text, price, day) {
		price = parseFloat(price, 10);
		if (text !== undefined && !isNaN(price) && day !== undefined) {
			this.lists.push({
				name: text,
				price: price,
				star: false,
				date: new Date(day).valueOf(),
				id: this.lists.length + 1
			});

			console.log("this.lists", this.lists);

			appService.sendData(text, price, day);
			$location.path(`/`);
		}
	}
}