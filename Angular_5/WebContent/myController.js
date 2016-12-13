var myModule = angular.module("myApp",[]);
var myController = function($scope){
	$scope.person = {
			name:"Abc",
			age:20,
			email:"abc@email.com",
			photo:"flower.jpg"
	};
};
myModule.controller("xxxx",myController);