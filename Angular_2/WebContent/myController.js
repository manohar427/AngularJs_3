var myModule = angular.module("myApp",[]);
var myController = function($scope){
	$scope.xyz = "Kumar";
};

var myController1 = function($scope){
	$scope.xyz = "Kumar";
};

myModule.controller("xxxx",myController);
myModule.controller("xxxx1",myController1);