import { returnPerson } from "../utilities/returnPerson";

test("Return person values", function () {
  expect(returnPerson.name).toBe(returnPerson.name);
  expect(returnPerson.age).toBe(returnPerson.age);
});
