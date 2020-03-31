import { OrderHistoryModel } from "./OrderHistoryModel.js";
import { OrderHistoryView } from "./OrderHistoryView.js";

export class OrderHistoryController {
  constructor() {
    this.model = new OrderHistoryModel();
    this.view = new OrderHistoryView(this.orderHistoryHandler.bind(this));
  }

  orderHistoryHandler() {
    const orderHistory = this.model.getOrderHistory();
    this.view.renderOrderHistory(orderHistory);
  }
}
