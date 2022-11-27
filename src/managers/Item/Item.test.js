
describe("Items", () => {
  test("The item can be instantiated.", () => {
    const item = new Item();
    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(Item);
  });

  test("The item can be passed a description and a name as options.", () => {
    const item = new Item({ name: "Test Item", description: "A test item." });
    expect(item.name).toBe("Test Item");
    expect(item.description).toBe("A test item.");
  });

  test("The item has a setDescription method which changes the description.", () => {
    const item = new Item();
    expect(item.description).toBe("");
    item.setDescription("A test item.");
    expect(item.description).toBe("A test item.");
  });

  test("The item has a setName method which changes the name.", () => {
    const item = new Item();
    expect(item.name).toBe("");
    item.setName("Test Item");
    expect(item.name).toBe("Test Item");
  });

  test("The item has an ID and an actions property when instantiated.", () => {
    const item = new Item();
    expect(item.id).toBeDefined();
    expect(item.actions).toBeDefined();
  });

  test("The item's actions property has add, get, getAll, remove, and update methods.", () => {
    const item = new Item();
    expect(item.actions.add).toBeDefined();
    expect(item.actions.add).toBeInstanceOf(Function);
    expect(item.actions.get).toBeDefined();
    expect(item.actions.get).toBeInstanceOf(Function);
    expect(item.actions.getAll).toBeDefined();
    expect(item.actions.getAll).toBeInstanceOf(Function);
    expect(item.actions.remove).toBeDefined();
    expect(item.actions.remove).toBeInstanceOf(Function);
    expect(item.actions.update).toBeDefined();
    expect(item.actions.update).toBeInstanceOf(Function);
  });

  // look to the Action Runner tests in World.js for more context.
  test("An action has a method, execute.", () => {
    const item = new Item();
    const action = new Action();
    item.actions.add(action);
    expect(action.execute).toBeDefined();
    expect(action.execute).toBeInstanceOf(Function);
  });
});