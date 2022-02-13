import { spaceReplace } from "../utilities/spaceReplace.js";

test("Remove spaces", function () {
  expect(spaceReplace("Apple cake dessert"));
  console.log(spaceReplace("Apple cake dessert"));
});
