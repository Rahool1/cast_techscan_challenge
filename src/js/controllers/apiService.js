angular.module('RDash')
	.factory('apiService', ['$http', apiService]);

function apiService($http) {

	var apiURL = 'https://api.github.com/';

	var repoListing = function(queryStr) {
		console.log(apiURL + "search/repositories?q="+queryStr);
		return $http.get(apiURL + "search/repositories?q="+queryStr,{handleError:true}).then(function(result) {
			console.log(result);
			// if(){

			// }
			return result.data;
		});
	};

	var userDetails = function(user) {
		return $http.get(apiURL + "search/users?q="+user).then(function(result) {
			return result.data;
		});
	};

	var usrDetail = function(user) {
		// https://api.github.com/users/rahool1
		return $http.get(apiURL + "users/"+user).then(function(result) {
			return result.data;
		});
	};

	var usrRepos = function(user) {
		// https://api.github.com/users/rahool1
		return $http.get(apiURL + "users/"+user+"/repos").then(function(result) {
			return result.data;
		});
	};

	var usrFollowers = function(user) {
		// https://api.github.com/users/rahool1
		return $http.get(apiURL + "users/"+user+"/followers").then(function(result) {
			return result.data;
		});
	};

	var usrFollowing = function(user) {
		// https://api.github.com/users/rahool1
		return $http.get(apiURL + "users/"+user+"/following").then(function(result) {
			return result.data;
		});
	};

	var service = {
		repoListing : repoListing,
		userDetails : userDetails,
		usrDetail : usrDetail,
		usrRepos : usrRepos,
		usrFollowers : usrFollowers,
		usrFollowing : usrFollowing
	}

	return service;
}

