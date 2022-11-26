const World = require("../src/managers/World/World");
describe("The Coder's Morning", () => {
  let world;
  beforeAll(() => {
    world = new World({
      name: "Coder's Morning",
      description: "All you need to do is complete the program."
    });
  })
  test("I can create the Coder's Morning game world.", () => {
    expect(world).toBeDefined();
    expect(world).toBeInstanceOf(World);
    expect(world.name).toBe("Coder's Morning");
    expect(world.description).toBe("All you need to do is complete the program.");
  });

  test("I can add a global parameter for the exhaustion mechanic.", () => {
    expect(world.globalParameters).toBeDefined();
    world.globalParameters.add({
      name: "exhaustion",
      value: 0
    });
    expect(world.globalParameters.get("exhaustion")).toBeDefined();
    expect(world.globalParameters.get("exhaustion").value).toBe(0);
  });

  test("I can add a global mechanic for the program_complete mechanic.", () => {
    expect(world.globalParameters).toBeDefined();
    world.globalParameters.add({
      name: "program_complete",
      value: false
    });
    expect(world.globalParameters.get("program_complete")).toBeDefined();
    expect(world.globalParameters.get("program_complete").value).toBe(false);
  });
});