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
		},

		sendData: function (dataForm) {
			console.log("posting data....");
			console.log(dataForm);
			//$http.post('form.php', JSON.stringify(data)).success(function(){/*success callback*/});
		}
	}
}