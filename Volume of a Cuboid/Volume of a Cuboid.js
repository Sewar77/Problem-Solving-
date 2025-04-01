/*
Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.

Write a function to help Bob with this calculation.

*/

function rectangularCuboid(width, height, depth) {
  if (width <= 0 || height <= 0 || depth <= 0) {
    return "cant calculate negative numbers";
  } else {
    var result = width * height * depth;
    return result;
  }
}

console.log(rectangularCuboid(12, -3, 2));
