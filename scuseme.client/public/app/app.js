/**
 * scuseme client app.js
 */

'use strict';

var scuseme = angular.module('scuseme', [
    'ngCookies',
	'ui.router',
	'ui.bootstrap'
]);

scuseme.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '/Content/common/views/main.html',
            abstract: true
        })
        .state('main.catalog', {
            url: '/main',
            templateUrl: '/Content/catalog/views/catalog.html',
            controller: 'mainController'
        });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

}]);

scuseme.run(['$rootScope', '$state', '$window', '$location', '$cookies', function ($rootScope, $state,$window, $location, $cookies) {

    // globals

}]);