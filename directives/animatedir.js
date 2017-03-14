angular.module('app').directive('animatedir', function () {
  return {
    scope: {
      navbardir: '='
    },
    controller: 'shopCtrl',
    restrict: 'E',
    link: function (scope, elements, attributes) {
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
     
     })
    }
  }
})