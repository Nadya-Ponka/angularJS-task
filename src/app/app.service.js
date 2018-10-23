export default function appService($http, $q) {
	return {
		getData: function () {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json'
			}).
			then(function success(response) {
				deferred.resolve(response.data);
			}, function error(response) {
				deferred.reject(response.status);
			});
			return deferred.promise;
		}
	}
}