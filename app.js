angular.module('app',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/404')

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            // controller: 'homeCtrl'
        })
        .state('apps', {
            url: '/apps/',
            templateUrl: '/views/apps.html',
            // controller: 'appsCtrl'
        })
        .state('plus', {
            url:'/plus',
            templateUrl:'/views/plus.html',
            // controller: 'plusCtrl'
        })
        .state('shop', {
            url:'/shop',
            templateUrl:'/views/shop.html',
            // controller: 'shopCtrl'
        })
        .state('watch', {
            url:'/watch',
            templateUrl:'/views/watch.html',
            // controller: 'watchCtrl'
        })
})