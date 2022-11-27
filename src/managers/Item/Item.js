const ActionManager = require("./ActionManager");

class Item {
  constructor({ name, description, properties }) {
    this.name = name;
    this.description = description;
    this.actions = new ActionManager();
    this.properties = properties;
  }

  setDescription(description) {
    this.description = description;
  }

  setName(name) {
    this.name = name;
  }
}

module.exports = Item;