   var mainApp = angular.module("mainApp", []);
         
         
         mainApp.factory('CalcFactory', function(){
        	 var factory={};
        	 factory.square = function(a) {
            	 return a*a;
            }
        	 return factory;
         });
         
         mainApp.controller('CalcController', function($scope, CalcFactory) {
            $scope.square = function() {
                  $scope.result = CalcFactory.square($scope.number);
            }
         });