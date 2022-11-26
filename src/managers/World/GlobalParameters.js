
class GlobalParameters {
  constructor() {
    this.parameters = {};
  }

  add(parameter) {
    this.parameters[parameter.name] = parameter;
  }

  get(name) {
    return this.parameters[name];
  }

  getAll() {
    return this.parameters;
  }

  remove(name) {
    delete this.parameters[name];
  }

  update(name, value) {
    if (typeof this.parameters[name].value !== typeof value) {
      throw new Error("You cannot change the type of a global parameter.");
    }
    this.parameters[name].value = value;
  }
}

module.exports = GlobalParameters;
