var myModule = angular.module("myApp",[]);
var myController = function($scope){
	$scope.persons = [
	                  {
	                	  name:"Abc",
	                	  age:16,
	                	  email:"wewe@email.com",
	                	  salary:121.232,
	                	  dob:new Date("March 19,1990")
	                  },
	                  {
	                	  name:"Xyz",
	                	  age:14,
	                	  email:"wJwewe@email.com",
	                	  salary:121.54545,
	                	  dob:new Date("April 10,1990")
	                  },
	                  {
	                	  name:"Pqr",
	                	  age:12,
	                	  email:"erwerwe@email.com",
	                	  salary:1212.333,
	                	  dob:new Date("May 10,1990")
	                  },
	                  {
	                	  name:"Abc",
	                	  age:16,
	                	  email:"wewe@email.com",
	                	  salary:121.232,
	                	  dob:new Date("March 19,1990")
	                  },
	                  {
	                	  name:"Xyz",
	                	  age:14,
	                	  email:"wJwewe@email.com",
	                	  salary:121.54545,
	                	  dob:new Date("April 10,1990")
	                  },
	                  {
	                	  name:"Pqr",
	                	  age:12,
	                	  email:"erwerwe@email.com",
	                	  salary:1212.333,
	                	  dob:new Date("May 10,1990")
	                  }
	                  ];
	
	$scope.minCount= 1;
	$scope.maxCount= 6;
	$scope.stepCount= 2;
	$scope.recCount = 1000;
	
	var pagesList = [
	                {
	                	pageRange:"1-5",
	                	count:5
	                },
	                {
	                	pageRange:"6-10",
	                	count:5
	                },
	                {
	                	pageRange:"11-15",
	                	count:5
	                },
	                {
	                	pageRange:"16-20",
	                	count:5
	                },
	                {
	                	pageRange:"21-25",
	                	count:5
	                }
	                ];
	$scope.pages = pagesList.slice(1,2);
	$scope.recordSelection = function(){
		
	};
};
myModule.controller("xxxx",myController);