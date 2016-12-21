var myModule = angular.module("myApp",[]);
var myController = function($scope){
	$scope.countries = [
	                    {
	                    	countryName:"IN",
	                    	statesList:[
	                    	            {statename:"IN1"},
	                    	            {statename:"IN2"},
	                    	            {statename:"IN3"},
	                    	            ]
	                    },
	                    {
	                    	countryName:"US",
	                    	statesList:[
	                    	            {statename:"US1"},
	                    	            {statename:"US2"},
	                    	            {statename:"US3"},
	                    	            ]
	                    },
	                    {
	                    	countryName:"UK",
	                    	statesList:[
	                    	            {statename:"UK1"},
	                    	            {statename:"UK2"},
	                    	            {statename:"UK3"},
	                    	            ]
	                    }
	                  ];
};
myModule.controller("xxxx",myController);