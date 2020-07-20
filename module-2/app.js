(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems =
            [
                { name: "a", quantity: 2 },
                { name: "b", quantity: 4 },
                { name: "c", quantity: 3 },
                { name: "d", quantity: 5 },
                { name: "e", quantity: 1 }
            ];

        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.buyItem = function (index) {
            boughtItems.push(toBuyItems[index]);
            toBuyItems.splice(index, 1);
        };
    };


    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var buyList = this;

        buyList.items = ShoppingListCheckOffService.getToBuyItems();
        console.log(buyList.items);

        buyList.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };

        buyList.emptyMessage = function () {
            if (buyList.items.length == 0)
                return true;
            else
                return false;
        }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var boughtList = this;

        boughtList.items = ShoppingListCheckOffService.getBoughtItems();

        boughtList.emptyMessage = function () {
            if (boughtList.items.length == 0)
                return true;
            else
                return false;
        }
    }




})();
