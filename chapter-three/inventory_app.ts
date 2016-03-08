// This is a decorator, this decorator defines meta-data for the following class
// You define here how the outside world will interact with your component 
@Component({
    selector: 'inventory-app',
    template: `
    <div class="inventory-app">
        <product-list
            [productList]="products"
            (onProductSelected)="productWasSelected($event)">
        </product-list>
    </div>
    `
})

class InventoryApp{
    products: Product[];
    
    constructor(){
        this.products = [
            new Product(
                'MYSHOES', 'Black Running Shoes',
                '/resources/images/products/black-shoes.jpg',
                ['Men', 'Shoes', 'Running Shoes'],
                109.99),
            new Product(
                'NEATOJACKET', 'Blue Jacket',
                '/resources/images/products/blue-jacket.jpg',
                ['Women', 'Apparel', 'Jackets & Vests'],
                238.99),
            new Product(
                'NICEHAT', 'A Nice Black Hat',
                '/resources/images/products/black-hat.jpg',
                ['Men', 'Accessories', 'Hats'],
                29.99)
        ];
    }
    
    productWasSelected(product: Product): void {
        console.log('Product clicked: ', product);
    }
    
}

bootstrap(InventoryApp);