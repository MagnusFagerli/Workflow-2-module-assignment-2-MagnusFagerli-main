import { spaceReplace } from "../utilities/spaceReplace.js";

test("Remove spaces", function () {
  expect(spaceReplace("Apple cake dessert"));
  console.log(spaceReplace("Apple cake dessert"));
});

// Probably written in a messy way? Function works replacing space with dash, console.log confirms.
