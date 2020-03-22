export class CartModel {
    constructor() {

    }

    getData() {
        let orders = localStorage.getItem('orders');

        if (orders) {
            orders = JSON.parse(orders);
            return orders;
        } else {
            return [];
        }
    }
}