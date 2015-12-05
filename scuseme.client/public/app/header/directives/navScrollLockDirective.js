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
                        $(".header-logotype").css({ height: '26px' });
                        $(".navbar-nav").css({ margin: '0' });
                        this.flagAdd = false;
                    }
                },
                remove: function () {
                    for (var i = 0; i < this.elements.length; i++) {
                        document.getElementById(this.elements[i]).className =
                                document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
                    }
                    $("#logoMark").attr('src', 'Content/images/logo_mark_large.png');
                    $(".header-logomark").css({ height: '100px' });
                    $(".header-logotype").css({ height: '36px' });
                    $(".navbar-nav").css({ margin: '30px 0 0 0' });
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