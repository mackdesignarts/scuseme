// scuseme mega drop down menu

'use strict';

scuseme.directive('megaMenu', function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            $(".dropdown").hover(
                function () {
                    $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
                },
                function () {
                    $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
                }
            );
        }
    }
});