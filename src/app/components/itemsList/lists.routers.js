routes.$inject = ['$stateProvider'];

/* import ListService from './lists.service';
 */
export default function routes($stateProvider) {
	$stateProvider
		.state('requestData', {
			url: '/',
			template: require('./lists.html'),
			resolve: {
				requestData: ['ListService', (ListService) => {
					let temp = ListService.getLists();
					console.log(temp);
					return temp;
				}]
			}
		});
}