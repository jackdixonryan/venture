const Item = require("../Item/Item");

class ItemManager {
  constructor() {
    this.items = [];
  }

  add({ name, location }) {
    const item = new Item({ name, location });
    this.items.push(item);
  }
}