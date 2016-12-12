var myModule = angular.module("myApp",[]);
var myController = function($scope){
	$scope.personName = "Abc";
};
myModule.controller("xxxx",myController);