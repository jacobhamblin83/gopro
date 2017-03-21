angular.module('app').controller('shopCtrl', function ($scope, service, $rootScope) {
  let cart = [];
  let products;

  init();

  function init(){
    getProducts();
  }


  function getCart(){
    service.getCart().then(function (response) {
      $rootScope.rootCart = response.data;
      
      if ($rootScope.rootCart && $rootScope.rootCart.length > 0){ 
        //here you will want to calculate the total. 


        $rootScope.subtotal = 10;
      }
      cart = $rootScope.rootCart;
      console.log("got the updated cart from localStorage", cart)
    })
  }

  function getProducts(){
    service.getProducts().then(function (res) {
      products = res;
    })
  }


  $scope.addToCart = function (id) {
    var product = products[id - 1];
      if (cart.length < 1) {
        product.quantity = 1
        product.total = product.price * product.quantity;
        cart.push(product);
        service.updateCart(cart).then(function(res){
          return getCart();
        })
      }
      else {
        for (var i = 0; i < cart.length; i++) {
          if (cart[i].id === id) {
            cart[i].quantity += 1;
            product.total = product.price * product.quantity;
            service.updateCart(cart).then(function(res){
              return getCart();
            })
            return;
          }
        }
      product.quantity = 1
      product.total = product.price * product.quantity;
      cart.push(product)
      service.updateCart(cart).then(function(res){
        return getCart();
      })
    }

  }

})//end of module