angular.module('app').service('service', function($http){ 
 
this.cart = [];
this.products;

 this.getProducts = function(){
    return $http({
      method: "GET",
      url: "/api/products",
    }).then(function(response){
      return response.data;
    })
  }
  this.updateCart = function(cart){
    return $http.post('/api/updatecart', cart)
  }
  // this.addToCart = function(product) {
  //     return $http.post('/api/cart', product)
  // }

  this.getCart = function() {
    return $http.get('/api/cart')
  }
  
  // this.addToCart = function(id){
  //   return $http({
  //     method: "POST",
  //     url: "/api/list/" + id,
  //   })
  // }

  // this.cartItems;

 
 
  // this.seeProducts = function(){
  //   return $http({
  //     method: "GET",
  //     url: "/api/list",
  //   }).then(function(response){
  //     return response.data;
  //   })
  // }

  // this.removeItem = function(id){
  //   return $http({
  //     method: "DELETE",
  //     url: "/api/list/" + id
  //   })
  // }

  // this.updateName = function(obj){
  //   return $http({
  //     method: "PUT",
  //     url: "/api/list",
  //     data: obj
  //   })
  // }
})

   