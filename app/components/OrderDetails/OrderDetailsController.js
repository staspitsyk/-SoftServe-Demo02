import { OrderDetailsModel } from "./OrderDetailsModel.js";
import { OrderDetailsView } from "./OrderDetailsView.js";

export class OrderDetailsController {
  constructor({ subscribe }) {
    this.model = new OrderDetailsModel();
    this.view = new OrderDetailsView(this.orderDetailsHandler.bind(this));
    this.subscribe = subscribe;
    this.subscribe("orders-history", this.getOrderDetails.bind(this));
  }

  getOrderDetails(orders) {
    console.log(orders);
    this.orderDetails = orders;
  }

  orderDetailsHandler() {
    const orders = this.orderDetails;
    console.log(orders);
    // console.log(this.model.getOrderDetails());
  }
}
