// scuseme footer controller

'use strict';

scuseme.controller('footerController', function () {
    var vm = this;
    var today = new Date();
    vm.year = today.getFullYear();
    vm.footerMenu = [
      { item: 'Catalog', state: "main.catalog" },
      { item: 'My Account', state: "main.activity" },
      { item: 'Contact Us', state: "main.catalog" },
      { item: 'FAQ', state: "main.catalog" }
    ];
});