'use strict';

angular.module('RDash').config(['$stateProvider', '$urlRouterProvider','$httpProvider','cfpLoadingBarProvider',

	function($stateProvider, $urlRouterProvider,$httpProvider,cfpLoadingBarProvider) {
		$httpProvider.interceptors.push(function() {
			return {
				responseError: function(rejection) {
					if(rejection.config.handleError && rejection.status === 403){
						alert("bad response");
					}
					return rejection;
				}
			}
		});

		$urlRouterProvider.otherwise('/a/technologies');

		$stateProvider
		.state('admin', {
			url: '/a',
			abstract: true,
			templateUrl: 'templates/home.html'
		})
		.state('admin.dash', {
			url: '/technologies',
			templateUrl: 'templates/technologies.html'
		})
		.state('admin.technolgy', {
			url: '/repo/:code',
			templateUrl: 'templates/repos.html',
			controller: 'TechCtrl'
		})
		.state('admin.users', {
			url: '/users/:name',
			templateUrl: 'templates/user.html',
			controller: 'UserCtrl'
		});


	}
]);
