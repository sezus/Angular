(function(){
'use strict';

angular.module('NameCalculator',[])

.controller('NameCalculatorController', function($scope) {
name =""
$scope.name=name;
var totalvalue=0;
$scope.totalvalue=totalvalue;

$scope.getName = function(){
  return $scope.name
};
$scope.setName= function($isim){
  $scope.name=$isim;
}
$scope.getTV= function(){
  return $scope.totalvalue;
}
$scope.setTV= function($tv){
  $scope.totalvalue=$tv;
}
$scope.displayNumeric= function(){
  var totalNvalue = calculateNumericforString($scope.name)
  $scope.setTV(totalNvalue);
}

function calculateNumericforString(string){
  var totalValstring =0;
  for(var i=0; i<string.length; i++){
    totalValstring += string.charCodeAt(i);
  }
  return totalValstring;
}

});

}) ();
