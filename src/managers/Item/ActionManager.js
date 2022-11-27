
class ActionManager {
  constructor() {
    this.actions = [];
  }

  add(action) {
    this.actions.push(action);
  }

  getAll() {
    return this.actions;
  }

  get(name) {
    return this.actions.find(action => action.name === name);
  }

  remove(name) {
    this.actions = this.actions.filter(action => action.name !== name);
  }
}

module.exports = ActionManager;