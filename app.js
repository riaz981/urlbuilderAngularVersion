var urlDropdown = angular.module('urlDropdown',[]);

urlDropdown.controller('dropdownController', function dropdownController($scope){
	$scope.firstDropdownSelected={};
	$scope.firstDropdown = [
		{
			name:'first Option',
			id:'firstOption'
		},
		{
			name:'second Option',
			id:'secondOption'
		}
	];

	$scope.firstDropdownSelected = $scope.firstDropdown[0].id;

	if($scope.firstDropdownSelected==="firstOption"){
			$scope.secondDropdown=[
				{
					name:'fifth Option',
					id: 'fifthOption'
				},
				{
					name:'sixth Option',
					id:'sixthOption'
				}
			];
	}

	$scope.onchange = function(list){
		console.log(list);
		if(list==="null"){
			$scope.secondDropdown="";
		}
		else if(list==="secondOption"){
			$scope.secondDropdown=[
				{
					name:'third Option',
					id: 'thirdOption'
				},
				{
					name:'fourth Option',
					id:'fourthOption'
				}
			];
		}

		else if(list==="firstOption"){
			$scope.secondDropdown=[
				{
					name:'fifth Option',
					id: 'fifthOption'
				},
				{
					name:'sixth Option',
					id:'sixthOption'
				}
			];
		}
	}
});