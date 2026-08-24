import assert from "node:assert/strict";
import test from "node:test";
import { protectedFixtureValue } from "./spine-fixture.mjs";

test("protected fixture has deterministic behavior", () => {
  assert.equal(protectedFixtureValue("gate"), "protected:gate");
  assert.throws(() => protectedFixtureValue(1), /input must be a string/);
});
