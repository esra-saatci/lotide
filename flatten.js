const flatten = function(array) {
  let flattenedArray = [];
  array.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(number => {
        flattenedArray.push(number);
      });
    } else {
      flattenedArray.push(element);
    }
  });
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

