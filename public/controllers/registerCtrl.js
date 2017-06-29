angular.module('app').controller('registerCtrl', function($scope, service) {
    $scope.register = function(obj) {
        service.register(obj)
    }
    $scope.checkUser = function(creds) {
        console.log('checking')
        service.checkUser().then(function(response) {
            console.log(response.data);
        })
    }
})