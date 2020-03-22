export class CartView {
    constructor() {
        this.cartBody = document.querySelector(".modal-body");
        this.cartCount = document.querySelector(".badge");
        this.cartCountValue = this.cartCount.innerHTML;
    }


    renderSingleProduct({ id, name, price }) {
        this.cartCount.innerHTML = ++this.cartCountValue;
        const div = document.createElement('div');
        div.classList.add(`cart__row`);
        div.innerHTML = `<span class = "cart__counter">№: ${this.cartCountValue} </span><p class = "cart__btn-remove">id: ${id} ${name} ${price}</p>`;

        const btn = document.createElement('button');
        btn.id = `removeFromCart${id}`;
        btn.innerHTML = 'Remove';

        btn.addEventListener('click', () => {
            this.removeOrder(div, id);
        });

        div.append(btn);

        this.cartBody.append(div);

        this.reRenderOrder();
    }

    removeOrder(rowToRemove, animalId) {
        let orders = localStorage.getItem('orders');
        orders = JSON.parse(orders);
        orders = orders.filter(({ id }) => id !== +animalId);
        orders = JSON.stringify(orders);
        localStorage.setItem('orders', orders);

        rowToRemove.remove();
        this.cartCount.innerHTML = --this.cartCountValue;
        this.reRenderOrder();
    }

    reRenderOrder() {
        const cartRows = document.querySelectorAll(".cart__counter");
        cartRows.forEach((p, index) =>  p.innerHTML = `№: ${index + 1} `);
    }

    renderCartAfterReload(orders) {
        orders.forEach(order => this.renderSingleProduct(order));
    }
}