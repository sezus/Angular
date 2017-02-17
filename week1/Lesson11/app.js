(function () {
'use strict';

angular.module('App', [])
.controller('AppController',AppController);

AppController.$inject = ['$scope'];
function AppController ($scope){

$scope.name="Sezgi";
$scope.state="nfed"

$scope.sayMessage = function(){
 return "Feed the troll!"
};
$scope.feedSezgi = function(){
  $scope.state="fed"
 return "Feed the troll!"
};
}

})();
