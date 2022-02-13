import { returnPerson } from "../utilities/returnPerson";

test("Return person values", function () {
  expect(returnPerson.name).toEqual(returnPerson.name);
  expect(returnPerson.age).toEqual(returnPerson.age);
  console.log(returnPerson("Peter", 22));
});
