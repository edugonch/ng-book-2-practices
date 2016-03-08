@Component({
    selector: 'product-department',
    inputs: ['product'],
    template: `
        <div class="product-department">
            <span *ngFor="#name in product.departments; #i=index">
                <a href="#">{{ name }}</a>
                <span>{{ i < (product.department.length - 1) ? '>' : '' }}</span>
            </span>
        </div>
    `
})

class ProductDepartment{
    product: Product;
}