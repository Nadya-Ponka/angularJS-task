routes.$inject = ['$stateProvider'];
/* export default function routes($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
} */
import AppService from './app.service';

export default function routes($stateProvider) {
	$stateProvider
		.state('requestData', {
			url: '/',
			template: require('./../index.html'),
			resolve: {
				requestData: ['AppService', (AppService) => {
					let temp = AppService.getLists();
					console.log(temp);
					return temp;
				}]
			}
		});
}