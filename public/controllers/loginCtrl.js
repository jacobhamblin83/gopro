angular.module('app').controller('loginCtrl', function($scope, service) {
    

    // $scope.getUser = function() {
    //     service.getUser().then(function(response) {
    //         $scope.userName = response.data
    //     })
    // }
    // $scope.getUser()

    $scope.checkUser = function(obj) {
        service.checkUser(obj).then(function(response){
            if (response.data[0]) {
                $scope.currentUser = response.data[0].firstname;
            }
            else {
                $scope.currentUser = null;
            }
            // $scope.getUser();
        })
    }
})