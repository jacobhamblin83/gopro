angular.module('app',['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/404')

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/views/home.html',
            // controller: 'homeCtrl'
        })
        .state('shop', {
            url:'/shop',
            templateUrl:'/views/shop.html',
            controller: 'shopCtrl'
        })
        .state('login', {
            url:'/login',
            templateUrl:'/views/login.html',
            // controller: 'watchCtrl'
        })
        .state('checkout', {
            url: '/checkout/',
            templateUrl: '/views/checkout.html'
        })
})
