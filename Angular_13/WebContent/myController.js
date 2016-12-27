var myModule = angular.module("myApp",[]);
var myController = function($scope){
	$scope.movies = [
	                 
	                 {
	                	 movieName:"XYZ",
	                	 likes:10,
	                	 disLike:5
	                 },
	                 {
	                	 movieName:"ABC",
	                	 likes:17,
	                	 disLike:15
	                 },
	                 {
	                	 movieName:"PQR",
	                	 likes:13,
	                	 disLike:56
	                 },
	                 {
	                	 movieName:"MNO",
	                	 likes:109,
	                	 disLike:597
	                 }
	                 ];
	var incrementLike_v = function(movie){
		++ movie.likes;
		
		//DB call update like in to DB
	};
	var incrementDisLike_v = function(movie){
		++ movie.disLike;
	};
	$scope.incrementLike = incrementLike_v;
	$scope.incrementDisLike = incrementDisLike_v;
	
};
myModule.controller("xxxx",myController);