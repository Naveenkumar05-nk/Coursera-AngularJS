(function() {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.checkOff = function(itemIndex) {
            ShoppingListCheckOffService.checkOff(itemIndex);
        }
    }
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [{
            name: "cookies",
            quantity: "5"
        }, {
            name: "cookies",
            quantity: "10"
        }, {
            name: "cookies",
            quantity: "25"
        }, {
            name: "chocolates",
            quantity: "Pack of 5"
        }, {
            name: "chocolates",
            quantity: "Pack of 10"
        }];
        var boughtItems = [];
        service.getToBuyItems = function() {
            return toBuyItems;
        };
        service.getBoughtItems = function() {
            return boughtItems;
        };
        service.checkOff = function(itemIndex) {
            boughtItems.push(toBuyItems[itemIndex]);
            toBuyItems.splice(itemIndex, 1);
        };
    }
})();
