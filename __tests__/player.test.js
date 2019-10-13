const { Player, NotImplementedError } = require("../js/game.v3");

describe("The Player class", () => {
  test("produces no extraneous output when instantiated", () => {
    const spy = jest.spyOn(global.console, "log");

    const player = new Player();
    player.name;
    player.points;
    player.points = 3;
    player.addPoint();

    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe("An instance of the Player class", () => {
  test("is actually an instance of Player", () => {
    const player = new Player();
    expect(player instanceof Player).toBeTruthy();
  });

  test("has a name", () => {
    const player = new Player();
    expect(typeof player.name).toBe("string");
  });

  test("keeps it's own score", () => {
    const player = new Player();
    expect(typeof player.points).toBe("number");
  });

  test("supports adding any number of points", () => {
    const player = new Player();
    player.points = 5;
    expect(player.points).toBeGreaterThanOrEqual(5);
  });

  describe("supports adding a point", () => {
    test("either via assignment", () => {
      const player = new Player();
      player.points = 1;
      expect(player.points).not.toBe(0);
    });

    test("or via method call", () => {
      const player = new Player();
      player.addPoint();
      expect(player.points).not.toBe(0);
    });
  });
});
