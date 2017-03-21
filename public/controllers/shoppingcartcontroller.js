angular.module('app').controller('shoppingcartcontroller', function($scope, service){
  $scope.items = service.getItems()
})