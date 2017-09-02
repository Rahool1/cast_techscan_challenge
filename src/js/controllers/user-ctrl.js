 angular
 .module('RDash')
 .controller('UserCtrl', ['$scope','$stateParams', '$timeout','apiService', UserCtrl]);

 function UserCtrl($scope,$stateParams,$timeout,apiService) {
	console.log('UserCtrl');
	console.log($stateParams);
	$scope.userBO = null;
	$scope.userRepos = null;

	$scope.init = function(){
		getDetails();
		getUserRepos();
	}
	$timeout($scope.init,100);

	var getDetails = function(){
		// var dataPromis = apiService.userDetails($stateParams.name);
		var dataPromis = apiService.usrDetail($stateParams.name);
		dataPromis.then(function(details) {
			console.log(details);
			$scope.userBO = details;
		});
	}

	$scope.tabChange = function(str) {
		// console.log(str);
		// getUserRepos();
		if(str == 'FOLLOWERS' && $scope.userBO.followers > 0){
			getUserFollowers();
		}
		if(str == 'FOLLOWING' && $scope.userBO.following > 0) {
			getUserFollowing();
		}
	};

	var getUserRepos = function(){
		var dataPromis = apiService.usrRepos($stateParams.name);
		dataPromis.then(function(repos) {
			console.log(repos);
			$scope.userRepos = repos;
		});
	}

	var getUserFollowers = function(){
		var dataPromis = apiService.usrFollowers($stateParams.name);
		dataPromis.then(function(followers) {
			console.log(followers);
			$scope.userFollowers = followers;
		});
	}

	var getUserFollowing = function(){
		var dataPromis = apiService.usrFollowing($stateParams.name);
		dataPromis.then(function(following) {
			console.log(following);
			$scope.userFollowing = following;
		});
	}

}
