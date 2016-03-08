// $ is being scaping b/c it is used as for template variables
@Component({
    selector: 'price-display',
    inputs: ['price'],
    template: `
        <div class"price-display">\${{ price }}</div>
    `
})

class PriceDisplay{
    price: number;
}