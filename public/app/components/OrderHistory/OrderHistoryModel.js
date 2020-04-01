export class OrderHistoryModel {
  constructor() {}

  getOrderHistory() {
    const orderHistory = JSON.parse(localStorage.getItem("orders")) || [];
    orderHistory.forEach(
      order => (order.parsedDate = this.changeDateFormat(order.date))
    );
    return orderHistory;
  }

  changeDateFormat(date) {
    return date.slice(0, 10);
  }
}
