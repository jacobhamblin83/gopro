angular.module('app').service('service', function($http){ 
 
 this.getProducts = function(){
    return $http.get("/api/products").then(function(response){
      return response.data;
    })
  }

  this.updateCart = (cart) => {
    return $http.post('/api/updatecart', cart)
  }

  this.deleteItem = (id) => {
    return $http.post('/api/ditem/:' + id)
  }

  this.deleteCart = () => {
    return $http.delete('/api/deletecart')
  }

  this.getCart = function() {
    return $http.get('/api/cart')
  }

  this.addOrder = function(cart) {
    return $http.post('/api/addcart', cart)
  }

  this.register = function(info) {
    return $http.post('/api/register', info)
  }
  this.checkUser = function(obj) {
    return $http.post('/api/check_user', obj)
  }
  
})//end of module 


   