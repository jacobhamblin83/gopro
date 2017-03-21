angular.module('app').controller('headerCtrl', ['$scope', 'service', '$rootScope', function($scope, service, $rootScope){

  init();

  function init(){
    getCart();
  }

  function getCart(){
    service.getCart().then(function (response) {
      $rootScope.rootCart = response.data;
      if ($rootScope.rootCart && $rootScope.rootCart.length > 0){ 
        //then we want to calculate the total. 
  
         $rootScope.subtotal = 10;
      }
      console.log("got the updated cart from localStorage")
    })
  }
  

  $(document).ready(function () { 
//shop drop down animations
    $('.shop').mouseenter(function () {
      $('.shopdropdown').animate({top: '75px'}, 75);
      $('.searchdropdown').css('top', '25px');
    })
    $('.killer').mouseenter(function () {
      $('.shopdropdown').animate({top: '-25px'}, 75);
    })
    $('.shopdropdown').mouseleave(function () {
      $('.shopdropdown').animate({top: '-25px'}, 75);
    })

//watch drop down animations
    $('.watchclass').mouseenter(function () {
      $('.watchdropdown').animate({top: '75px'}, 75);
      $('.searchdropdown').css('top', '25px');
    })
    $('.killer').mouseenter(function () {
      $('.watchdropdown').animate({top: '-25px'}, 75);
    })
    $('.watchdropdown').mouseleave(function () {
      $('.watchdropdown').animate({top: '-25px'}, 75);
    })

//plus drop down animations
        $('.plus').mouseenter(function() {
          $('.plusdropdown').animate({top: '75px'}, 75);
        })
        $('.killer').mouseenter(function() {
          $('.plusdropdown').animate({top: '-225px'}, 75);
        })
        $('.plusdropdown').mouseleave(function() {
          $('.plusdropdown').animate({top: '-225px'}, 75);
        })
//search drop down appear
    $('#fasearch').on('click', function() {
      $('.searchdropdown').css('top', '75px');
    })
    $('.exitsearch').on('click', function() {
      $('.searchdropdown').css('top', '25px');
    })

//hightlighting shop items    
    $('.dropdiv1').mouseenter(function() {
      $('.dropdiv1').css("border-bottom-color", 'blue')
    })
    $('.dropdiv1').mouseleave(function() {
      $('.dropdiv1').css("border-bottom-color", 'transparent')
    })
    $('.dropdiv2').mouseenter(function() {
      $('.dropdiv2').css("border-bottom-color", 'blue')
    })
    $('.dropdiv2').mouseleave(function() {
      $('.dropdiv2').css("border-bottom-color", 'transparent')
    })
    $('.dropdiv3').mouseenter(function() {
      $('.dropdiv3').css("border-bottom-color", 'blue')
    })
    $('.dropdiv3').mouseleave(function() {
      $('.dropdiv3').css("border-bottom-color", 'transparent')
    })
    $('.dropdiv4').mouseenter(function() {
      $('.dropdiv4').css("border-bottom-color", 'blue')
    })
    $('.dropdiv4').mouseleave(function() {
      $('.dropdiv4').css("border-bottom-color", 'transparent')
    })
    $('.dropdiv5').mouseenter(function() {
      $('.dropdiv5').css("border-bottom-color", 'blue')
    })
    $('.dropdiv5').mouseleave(function() {
      $('.dropdiv5').css("border-bottom-color", 'transparent')
    })
    $('.dropdiv6').mouseenter(function() {
      $('.dropdiv6').css("border-bottom-color", 'blue')
    })
    $('.dropdiv6').mouseleave(function() {
      $('.dropdiv6').css("border-bottom-color", 'transparent')
    })
    $('.dropdiv7').mouseenter(function() {
      $('.dropdiv7').css("border-bottom-color", 'blue')
    })
    $('.dropdiv7').mouseleave(function() {
      $('.dropdiv7').css("border-bottom-color", 'transparent')
    })

//dropdown for shopping cart   
    $('#hey').mouseenter(function(){
      $('.hi').fadeIn(300);
    })
    $('.hi').mouseleave(function(){
      $('.hi').fadeOut(300);
    })
    
    
  })

}])//end of module