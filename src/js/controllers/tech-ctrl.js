 angular
 .module('RDash')
 .controller('TechCtrl', ['$scope','$stateParams', '$timeout','apiService', TechCtrl]);

 function TechCtrl($scope,$stateParams,$timeout,apiService) {
	$scope.Math = window.Math;
	$scope.repoBO = null;
	$scope.repo = {
		filter : 'BESTMATCH'
	};

	$scope.totalItems = 0;
	$scope.maxSize = 5;
	$scope.currentPage = 1;
	$scope.itemPerPage = 9;

	$scope.init = function(){
		getRepos('');
	}
	$timeout($scope.init,100);

	var getRepos = function(str){

		var searchQuery =  $stateParams.code+'+'+str+'&sort=stars&order=desc&page='+$scope.currentPage+'&per_page='+$scope.itemPerPage;

		if($scope.repo.filter == 'BESTMATCH'){
			searchQuery = $stateParams.code+'+'+str+'&sort=stars&order=desc&page='+$scope.currentPage+'&per_page='+$scope.itemPerPage;
		}
		if($scope.repo.filter == 'MOSTSTAR'){
			searchQuery = $stateParams.code+'+'+str+'&sort=stars&order=desc&page='+$scope.currentPage+'&per_page='+$scope.itemPerPage;
		}
		if($scope.repo.filter == 'FEWESTSTAR'){
			searchQuery = $stateParams.code+'+'+str+'&sort=stars&order=asc&page='+$scope.currentPage+'&per_page='+$scope.itemPerPage;
		}
		if($scope.repo.filter == 'MOSTFORK'){
			searchQuery = $stateParams.code+'+'+str+'&sort=forks&order=desc&page='+$scope.currentPage+'&per_page='+$scope.itemPerPage;
		}
		if($scope.repo.filter == 'FEWESTFORK'){
			searchQuery = $stateParams.code+'+'+str+'&sort=forks&order=asc&page='+$scope.currentPage+'&per_page='+$scope.itemPerPage;
		}
		if($scope.repo.filter == 'RECENTLYUPDATE'){
			searchQuery = $stateParams.code+'+'+str+'&sort=pushed&order=desc&page='+$scope.currentPage+'&per_page='+$scope.itemPerPage;
		}



		dataPromis = apiService.repoListing(searchQuery);
		dataPromis.then(function(repos) {
			console.log(repos);
			$scope.repoBO = repos;
			$scope.totalItems = repos.total_count;
		});

	}

	$scope.pageChanged = function(page){
		$scope.currentPage = page;
		getRepos('');
	}

	$scope.valueEnter = function(search){
		$scope.currentPage = 1;
		getRepos(search);
	}

	$scope.update = function(){
		$scope.currentPage = 1;
		getRepos('');
	}

}
