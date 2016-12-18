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
	                  }
	                  ];
};
myModule.controller("xxxx",myController);