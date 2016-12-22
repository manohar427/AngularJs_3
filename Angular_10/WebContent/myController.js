var myModule = angular.module("myApp",[]);
var myController = function($scope,$http){
	$http({
		     method:"get",
		     url: "http://services.groupkt.com/country/get/all"
	     }
			).then(
					function(response){
						$scope.countries = response.data.RestResponse.result;
					}
			);
};
myModule.controller("xxxx",myController);