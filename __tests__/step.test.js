const {
  Step,
  InvalidColorError,
  NotImplementedError
} = require("../js/game.v3");

describe("The Step class", () => {
  test("produces no extraneous output when instantiated", () => {
    const spy = jest.spyOn(global.console, "log");

    const step = new Step();
    step.color;

    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  test("defines a static list of colors", () => {
    expect(Step.COLORS).toBeTruthy();
    expect(Array.isArray(Step.COLORS)).toBeTruthy();
    expect(Step.COLORS.length).toBeGreaterThan(0);
  });

  test("provides a utility function for validating colors", () => {
    expect(Step.isValidColor).toBeDefined();
    expect(Step.isValidColor(Step.COLORS[0])).toBeTruthy();
    expect(Step.isValidColor({ color: "moar colors!" })).toBeFalsy();
  });
});

describe("An instance of the Step class", () => {
  test("is actually an instance of Step", () => {
    const step = new Step();
    expect(step instanceof Step).toBeTruthy();
  });

  test("has a color assigned by default", () => {
    const step = new Step();
    expect(Step.COLORS).toContain(step.color);
  });

  test("may have a color assigned at instantiation", () => {
    const step = new Step({ color: "blue" });
    expect(step.color).toEqual("blue");
  });

  test("throws if an invalid color is suggested", () => {
    expect(() => new Step({ color: "chartreuse" })).toThrow(InvalidColorError);
  });

  test("throws if a sound is requested (because it's not implemented yet)", () => {
    const step = new Step();
    expect(() => step.sound).toThrow(NotImplementedError);
  });
});
