const GlobalParameters = require("./GlobalParameters");

class World {
  constructor(options = {}) {
    this.name = options.name || "";
    this.description = options.description || "";
    this.globalParameters = new GlobalParameters();
  }

  setDescription(description) {
    this.description = description;
  }

  setName(name) {
    this.name = name;
  }
}

module.exports = World;
