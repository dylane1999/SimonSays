const { Game, NotImplementedError } = require("../js/game.v3");

describe("The Game class", () => {
  test("produces no extraneous output when instantiated", () => {
    const spy = jest.spyOn(global.console, "log");

    const game = new Game();
    game.players;
    game.player;
    game.challenge;

    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe("An instance of the Game class", () => {
  test("is actually an instance of Game", () => {
    const game = new Game();
    expect(game instanceof Game).toBeTruthy();
  });

  test("throws if an attempt is checked (because it's not implemented yet)", () => {
    const game = new Game();
    expect(() => game.check()).toThrow(NotImplementedError);
  });
});
