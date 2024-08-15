import { mocks } from "./mock";

export const restaurantsRequest = (
  location = "37.7750214302915, -122.4202089697085"
) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

restaurantsRequest()
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });
