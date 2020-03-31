export class OrderHistoryModel {
  constructor() {}

  getOrderHistory() {
    const orderHistory = JSON.parse(localStorage.getItem("orders")) || [];
    return orderHistory;
  }
}
