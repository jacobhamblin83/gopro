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
        .state('register', {
            url: '/register/',
            templateUrl: '/views/register.html',
            controller: 'shopCtrl'
        })
        .state('plus2', {
            url: '/plus2/',
            templateUrl: '/views/plus2.html',
            controller: 'shopCtrl'
        })
        .state('thankspage', {
            url: '/thankspage/',
            templateUrl: '/views/thankspage.html'
        })
})
