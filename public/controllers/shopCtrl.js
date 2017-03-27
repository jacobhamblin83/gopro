angular.module('app').controller('shopCtrl', function($scope, service, $rootScope) {
  let cart = $rootScope.rootCart ? $rootScope.rootCart : [];
  let products;
  let estimatedtotal;

  init();

  function init(){
    getProducts();
  }
function name(name){
  console.log(name);
 }
//UPDATES ROOTCART WITH COOKIE CART INFO AND DETERMINES TOTALS 
//ALSO DISPLAYS THE QUANTITY OF ITEMS IN THE CART
  function getCart(){
    service.getCart().then(function (response) {
      $rootScope.rootCart = response.data;
      $rootScope.subtotal = 0;
      $rootScope.totalQuantity = 0;
      if ($rootScope.rootCart && $rootScope.rootCart.length > 0){ 
        for (i = 0; i < $rootScope.rootCart.length; i++){
          $rootScope.subtotal += $rootScope.rootCart[i].total
          $rootScope.subtotal = Math.floor($rootScope.subtotal*100)/100
          $rootScope.totalQuantity += $rootScope.rootCart[i].quantity;
        }
      }
      cart = $rootScope.rootCart;
      if ($rootScope.totalQuantity > 0) {
        $('.smallcircle').css('display', 'block')
        $('.shopping_cart_dropdown_subtotal').css('display', 'block');
        $('.noitems').css('display', 'none');
      } 
      else  $('.smallcircle').css('display', 'none');
            $('.shopping_cart_dropdown_subtotal').css('display', 'none');
      for (i=0;i<response.data.length;i++){
      estimatedtotal+=response.data[i].price * response.data[i].quantity;
    }
    $rootScope.estimatedtotal = estimatedtotal;
  })
  checkagain()
  }
  
//PULLS PRODUCT INFO FROM THE DATABASE
  function getProducts(){
    service.getProducts().then(function(res) {
      products = res;
    })
  }

//CLEAR CART FROM THE COOKIE
  function clearCart(){
    service.deleteCart().then(function() {
      return getCart();
    }).then(response => {
      $rootScope.rootCart = response;
      getCart();
      $('smallcircle').css('display', 'none')
    })
  }

  $scope.removeItem = function(id){
    service.deleteItem(id).then(function(response) {
      $rootScope.rootCart = response
      return getCart();
    })
  }

  function checkagain(){
    service.getCart().then(function(response){
      var estimatedtotal = 0;
      for (i=0;i<response.data.length;i++){
        estimatedtotal+=response.data[i].price * response.data[i].quantity;
      }
      $rootScope.estimatedtotal = estimatedtotal;
    })
  }

//ADD ORDER FROM COOKIE TO THE DATABASE
 $scope.addOrder = () => {
   service.getCart().then( (response) => {
      service.addOrder(response)
      clearCart();
   })
 }

//ADD RELAVENT RESULTS FROM GETPRODUCTS TO THE COOKIE CART
//DECIDES WHETHER TO ADD THE PRODUCT OR JUST UPDATE THE QUANTITY
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
            cart[i].total = Math.floor(cart[i].price * cart[i].quantity * 100)/100;
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
