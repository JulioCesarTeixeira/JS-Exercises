# READ IT
## EX 14
* Look at the reduce() function and research how it works exactly.
* Notice the ', 0' in the reduce function. Inspect the result when you omit this. Explain the difference.
  ** if I omit the ', o' it breaks that console.log and does not show the total capacity of the theater.
  ** the 0 is the initial value of the reduce() function. It has to have reduce(callback*function to execute in each element of the array*(accumulator*sums up*,currentValue, [index, array and initialValue]))
  ** alternatively it can be because the 'theatre' is associated with the length statement and that needs an initial value
* What are we doing with the object that's passed to 'calculateAvailable'?
    ** transforming it to a map, which is easier to work with when dealing with array of objects, takes the theatre function (capacity-occupied), and displays in a table all the objects from the map with their indexes and properties and adds the 'available' property.
