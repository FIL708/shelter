export default function areObjectsEqual(firstObject, secondObject) {
  let flag = true;
  Object.keys(firstObject).forEach((key) => {
    if (!Object.hasOwn(secondObject, key)) {
      flag = false;
    }
    if (firstObject[key] !== secondObject[key]) {
      flag = false;
    }
  });
  return flag;
}
