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
        .state('apps', {
            url: '/apps/',
            templateUrl: '/views/apps.html'
        })
        .state('cartsummary', {
            url: '/cartsummary/',
            templateUrl: '/views/cartsummary.html'
        })
        .state('plus', {
            url: '/plus/',
            templateUrl: '/views/plus.html'
        })
})
