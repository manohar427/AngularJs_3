   var mainApp = angular.module("mainApp", []);
         
         
         mainApp.service('CalcService', function(){
            this.square = function(a) {
            	 return a*a;
            }
         });
         
         mainApp.controller('CalcController', function($scope, CalcService) {
            $scope.square = function() {
                  $scope.result = CalcService.square($scope.number);
            }
         });