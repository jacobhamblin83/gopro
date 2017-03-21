angular.module('app').controller('shopCtrl', function ($scope, service, $rootScope) {

  init();

  function init(){
    getProducts();
  }


  function getCart(){
    service.getCart().then(function (response) {
      service.cart = response.data;
      $rootScope.rootCart = response.data;
      console.log("got the updated cart from localStorage", service.cart)
    })
  }

  function getProducts(){
    service.getProducts().then(function (res) {
      $scope.products = res
      service.products = res
    })
  }


  $scope.addToCart = function (id) {
    var product = service.products[id - 1];
      if (!Array.isArray(service.cart)) {
        service.cart = []
        product.quantity = 1
        product.total = product.price * product.quantity;
        service.cart.push(product);
        service.updateCart(service.cart).then(function(res){
          return getCart();
        })
      }
      else {
        for (var i = 0; i < service.cart.length; i++) {
          if (service.cart[i].id === id) {
            service.cart[i].quantity += 1;
            product.total = product.price * product.quantity;
            service.updateCart(service.cart).then(function(res){
              return getCart();
            })
            return;
          }
        }
      product.quantity = 1
      product.total = product.price * product.quantity;
      service.cart.push(product)
      service.updateCart(service.cart).then(function(res){
        return getCart();
      })
    }

  }

  // $scope.addToCart = function(product){


  // // $rootScope.testing = 1
  // //   service.addToCart(product).then(function(res){
  // //     service.getCart().then(function(r){
  // //       $rootScope.cartStuff = r
  // //     })
  // //   })
  // // }



  // $scope.addToCart = function(id){
  // $rootScope.testing = 1
  //   service.addToCart(id).then(function(res){
  //     service.getProducts().then(function(r){
  //       $rootScope.cartStuff = r
  //     })
  //   })
  // }
})