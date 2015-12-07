// scuseme scroll header lock

'use strict';

scuseme.directive('navScrollLock', function () {
    return {
        restrict: 'A',        
        link: function ($scope, element, attrs) {

            var myNavBar = {
                flagAdd: true,
                elements: [],
                init: function (elements) {
                    this.elements = elements;
                },
                add: function () {
                    if (this.flagAdd) {
                        for (var i = 0; i < this.elements.length; i++) {
                            document.getElementById(this.elements[i]).className += " fixed-theme";
                        }
                        $("#logoMark").attr('src', 'Content/images/logo_mark_head.png');
                        $(".header-logomark").css({ height: '40px' });
                        $(".header-logotype").css({ height: '24px' });
                        $(".navbar-nav").css({ margin: '0' });
                        $("#navbar-trending").hide();
                        $(".adjust-header").css({ "margin-top": "0" });
                        this.flagAdd = false;
                    }
                },
                remove: function () {
                    for (var i = 0; i < this.elements.length; i++) {
                        document.getElementById(this.elements[i]).className =
                                document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
                    }
                    $("#logoMark").attr('src', 'Content/images/logo_mark_large.png');
                    $(".header-logomark").css({ height: '92px' });
                    $(".header-logotype").css({ height: '32px' });
                    $(".navbar-nav").css({ margin: '0 0 0 0' });
                    $("#navbar-trending").show();
                    $(".adjust-header").css({ "margin-top": "-25px" });
                    this.flagAdd = true;
                }
            };

            myNavBar.init([
                "header",
                "header-container",
                "brand"
            ]);

            function offSetManager() {
                var yOffset = 0;
                var currYOffSet = window.pageYOffset;

                if (yOffset < currYOffSet) {
                    myNavBar.add();
                }
                else if (currYOffSet == yOffset) {
                    myNavBar.remove();
                }
            }

            window.onscroll = function (e) {
                offSetManager();
            }

            offSetManager();
        }
    }
});