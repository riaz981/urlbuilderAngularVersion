var urlDropdown = angular.module('urlDropdown',[]);

urlDropdown.controller('dropdownController', function dropdownController($scope){
	$scope.firstDropdownSelected={};
	$scope.firstDropdown = [
		{
			name:'Email',
			id:'email'
		},
		{
			name:'Display',
			id:'display'
		},
		{
			name: 'Social',
			id: 'social'	
		},
		{
			name: 'ppc',
			id: 'ppc'
		}
	];

	$scope.firstDropdownSelected = $scope.firstDropdown[0].id;

	if($scope.firstDropdownSelected==="email"){
			$scope.secondDropdown=[
				{
					name:'lawyersweekly',
					id: 'lawyersweekly'
				},
				{
					name:'Accountants Daily',
					id:'Accountants Daily'
				},
				{
					name:'AI',
					id:'AI'
				},
				{
					name:'Fintech Business',
					id:'Fintech Business'
				},
				{
					name:'InvestorDaily',
					id:'InvestorDaily'
				},
				{
					name:'Risk Adviser',
					id:'Risk Adviser'
				},
				{
					name:'SPI',
					id:'SPI'
				},
				{
					name:'WIP',
					id:'WIP'
				},
				{
					name: 'IFA',
					id: 'IFA'
				},
				{
					name: 'MBUS',
					id: 'MBUS'
				},
				{
					name: 'NE',
					id: 'NE'
				},
				{
					name: 'Mortgage Business',
					id: 'Mortgage Business'
				},
				{
					name: 'Real Estate Business',
					id: 'Real Estate Business'
				},
				{
					name: 'Residential Property Manager',
					id: 'Residential Property Manager'
				},
				{
					name: 'SMSFAdviser',
					id: 'SMSFAdviser'
				},
				{
					name: 'The Adviser',
					id: 'The Adviser'
				}
			];
	}

	

	$scope.onchange = function(list){
		console.log(list);
		if(list==="null"){
			$scope.secondDropdown="";
		}

		if(list==="email"){
			$scope.secondDropdown=[
				{
					name:'lawyersweekly',
					id: 'lawyersweekly'
				},
				{
					name:'Accountants Daily',
					id:'Accountants Daily'
				},
				{
					name:'AI',
					id:'AI'
				},
				{
					name:'Fintech Business',
					id:'Fintech Business'
				},
				{
					name:'InvestorDaily',
					id:'InvestorDaily'
				},
				{
					name:'Risk Adviser',
					id:'Risk Adviser'
				},
				{
					name:'SPI',
					id:'SPI'
				},
				{
					name:'WIP',
					id:'WIP'
				},
				{
					name: 'IFA',
					id: 'IFA'
				},
				{
					name: 'MBUS',
					id: 'MBUS'
				},
				{
					name: 'NE',
					id: 'NE'
				},
				{
					name: 'Mortgage Business',
					id: 'Mortgage Business'
				},
				{
					name: 'Real Estate Business',
					id: 'Real Estate Business'
				},
				{
					name: 'Residential Property Manager',
					id: 'Residential Property Manager'
				},
				{
					name: 'SMSFAdviser',
					id: 'SMSFAdviser'
				},
				{
					name: 'The Adviser',
					id: 'The Adviser'
				}
			];
	}

	else if(list==="display"){
		$scope.secondDropdown=[
			{
					name:'lawyersweekly',
					id: 'lawyersweekly'
				},
				{
					name:'Accountants Daily',
					id:'Accountants Daily'
				},
				{
					name:'AI',
					id:'AI'
				},
				{
					name:'Fintech Business',
					id:'Fintech Business'
				},
				{
					name:'InvestorDaily',
					id:'InvestorDaily'
				},
				{
					name:'Risk Adviser',
					id:'Risk Adviser'
				},
				{
					name:'SPI',
					id:'SPI'
				},
				{
					name:'WIP',
					id:'WIP'
				},
				{
					name: 'IFA',
					id: 'IFA'
				},
				{
					name: 'MBUS',
					id: 'MBUS'
				},
				{
					name: 'NE',
					id: 'NE'
				},
				{
					name: 'Mortgage Business',
					id: 'Mortgage Business'
				},
				{
					name: 'Real Estate Business',
					id: 'Real Estate Business'
				},
				{
					name: 'Residential Property Manager',
					id: 'Residential Property Manager'
				},
				{
					name: 'SMSFAdviser',
					id: 'SMSFAdviser'
				},
				{
					name: 'The Adviser',
					id: 'The Adviser'
				}
			];
	}

		else if(list==="social"){
			$scope.secondDropdown=[
				{
					name:'facebook',
					id: 'facebook'
				},
				{
					name:'twitter',
					id:'twitter'
				},
				{
					name:'linkedin',
					id:'linkedin'
				},
				{
					name:'plus.google.com',
					id:'plus.good.com'
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
		else{
			$scope.secondDropdown = "";
		}
	}
});