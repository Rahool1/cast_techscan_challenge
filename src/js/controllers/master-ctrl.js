angular.module('RDash')
.controller('MasterCtrl', ['$scope', '$cookieStore', '$timeout','$q', 'apiService' , MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $timeout, $q, apiService) {

	$scope.init = function(){
		getTechListingListing();
	}

	$scope.technologyList = [
		{name:'Javascript', code:'javascript', logo:'img/javascript.jpg'},
		{name:'Java', code:'java', logo:'img/java.png'},
		{name:'Python', code:'python', logo:'img/python.jpg'},
		{name:'Php', code:'php', logo:'img/php.jpg'},
		{name:'Ruby', code:'ruby',logo:'img/ruby.png'}
	];

	$timeout($scope.init,100);
	var getTechListingListing = function(){
		var deferred = $q.defer();

		var promises = [];
		angular.forEach($scope.technologyList, function(value, key) {
			// console.log(value);
			var dataPromis = apiService.repoListing(value.code);
			promises.push(dataPromis);
		});

		$q.all(promises).then(function(r) {
			angular.forEach($scope.technologyList, function(value, key) {
				angular.forEach(r, function(value1, key1) {
					if(key == key1){
						value.total = value1.total_count;
					}
				});
			})
			console.log($scope.technologyList);
		});
	}

}
