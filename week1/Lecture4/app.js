(function (){
'use strict'; // protect some problems

angular.module('myFirstApp',[])

.controller('MyFirstController', function($scope) {
 name="Sezgi";
 $scope.name=name
 $scope.setname = function($isim){
   name = $isim;
 };
 $scope.getname = function(){
   return name
 };
 $scope.totalvalue= 0;
 $scope.sayHello= function(){
   return "Hello coursera!"
 }
});

})();
