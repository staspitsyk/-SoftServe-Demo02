export class Publisher {
  constructor() {
    this.subscribes = {};
  }

  get methods() {
    return {
      subscribe: this.subscribe.bind(this),
      notify: this.notify.bind(this),
      unsubscribe: this.unsubscribe.bind(this)
    };
  }

  isEventExist(event) {
    if (!this.subscribes[event]) {
      this.subscribes[event] = [];
    }
  }

  subscribe(event, callBack) {
    this.isEventExist(event);
    this.subscribes[event].push(callBack);
  }

  notify(event, data) {
    this.isEventExist(event);
    this.subscribes[event].forEach(func => func(data));
  }

  unsubscribe(event, callBack) {
    this.isEventExist(event);
    this.subscribes[event] = this.subscribes[event].filter(
      func => func !== callBack
    );
  }
}
