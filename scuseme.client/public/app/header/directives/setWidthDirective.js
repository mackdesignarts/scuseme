// set width to pixels

'use strict';

scuseme.directive('setWidth', function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            var docWidth = document.documentElement["clientWidth"] - 40;
            $("#navbar-trending").css({ width: docWidth + "px" });
            $(window).resize(function () {
                var docWidth = document.documentElement["clientWidth"] - 40;
                $("#navbar-trending").css({ width: docWidth + "px" });
            });
        }
    }
});