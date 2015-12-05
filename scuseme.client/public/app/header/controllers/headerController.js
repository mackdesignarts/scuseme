// scuseme header controller

'use strict';

scuseme.controller('headerController', ['$scope', '$q', '$rootScope', '$state', '$filter', 'communitiesFactory', function ($scope, $q, $rootScope, $state, $filter, communitiesFactory) {

    var vm = this;
    vm.title = "Scuse.Me!";

    var communities = communitiesFactory.get()
        .success(function (data) {
            console.log(data);
            return (data);
            
        })
        .error(function(err){
            // error handler
        });
    

    function MyCtrl($scope) {
        $scope.items = m;
    }

}]);