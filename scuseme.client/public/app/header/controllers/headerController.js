// scuseme header controller

'use strict';

scuseme.controller('headerController', ['$scope', '$q', '$rootScope', '$state', '$filter', 'communitiesFactory', function ($scope, $q, $rootScope, $state, $filter, communitiesFactory) {

    var vm = this;
    vm.title = "Scuse.Me!";

    vm.communities = [];

    var init = function () {
        communitiesFactory.get()
            .success(function (data) {
                var arr = [];
                for (var i = 0; i < data.length; i++) {
                    arr.push({title: data[i].Title});
                }
                vm.communities = arr;
            })
            .error(function (err) {
                // error handler
            });
    }
    
    init();

}]);