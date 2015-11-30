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
            url: '',
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'Content/header/views/header.html'
                },
                'footer': {
                    templateUrl: 'Content/footer/views/footer.html'
                }
            }
        })
        .state('main.catalog', {
            url: '/',
            views: {
                'container@': {
                    templateUrl: 'Content/catalog/views/catalog.html'
                }
            }
        })
        .state('main.activity', {
            url: '/activity',
            views: {
                'container@': {
                    templateUrl: 'Content/article/views/article.html'
                }
            }
        });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

}]);

scuseme.run(['$rootScope', '$state', '$window', '$location', '$cookies', function ($rootScope, $state,$window, $location, $cookies) {

    // globals

}]);