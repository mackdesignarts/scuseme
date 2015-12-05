// communities CRUD

'use strict';

scuseme.factory('communitiesFactory', ['$http', '$q', '$rootScope', '$state', function ($http, $q, $rootScope, $state, communitiesFactory) {

    return {
        get: function () {
            return $http({
                url: 'api/Communities',
                method: 'GET'
            })
        }
    }

}]);