var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// This is a decorator, this decorator defines meta-data for the following class
// You define here how the outside world will interact with your component 
var InventoryApp = (function () {
    function InventoryApp() {
        this.products = [
            new Product('MYSHOES', 'Black Running Shoes', '/resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
            new Product('NEATOJACKET', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
            new Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
        ];
    }
    InventoryApp.prototype.productWasSelected = function (product) {
        console.log('Product clicked: ', product);
    };
    InventoryApp = __decorate([
        // This is a decorator, this decorator defines meta-data for the following class
        Component({
            selector: 'inventory-app',
            template: "\n    <div class=\"inventory-app\">\n        <product-list\n            [productList]=\"products\"\n            (onProductSelected)=\"productWasSelected($event)\">\n        </product-list>\n    </div>\n    "
        })
    ], InventoryApp);
    return InventoryApp;
}());
bootstrap(InventoryApp);
