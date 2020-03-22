import { CartView } from './CartView.js';
import { CartModel } from './CartModel.js';

export class CartController {
    constructor({ subscribe }) {
        this.view = new CartView();
        this.model = new CartModel();
        this.subscribe = subscribe;
        this.subscribe("addToCart", this.handleClick.bind(this));
        this.handleReload();
    }

    handleClick(animal) {
        this.view.renderSingleProduct(animal);
    }

    handleReload() {
        const orders = this.model.getData();
        this.view.renderCartAfterReload(orders);
    }
}