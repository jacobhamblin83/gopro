angular.module('app').service('service', function($http){ 
 


 this.getProducts = function(){
    return $http({
      method: "GET",
      url: "/api/products",
    }).then(function(response){
      return response.data;
    })
  }

  this.updateCart = (cart) => {
    return $http.post('/api/updatecart', cart)
  }

  this.deleteCart = () => {
    return $http.delete('/api/deletecart')
  }


  this.getCart = function() {
    return $http.get('/api/cart')
  }
  
})//end of module 

   