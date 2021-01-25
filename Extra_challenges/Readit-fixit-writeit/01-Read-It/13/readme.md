# READ IT
## EX 13
* Examine the parseMovieData function. What has changed? Why aren't we using forEach here? 
  ** it is transforming the results to strings with let result = ``;. The for... in... is looking for a specific property in the objects and that would complex to use forEach
* Look at the documentation of for...in
* Look at the documentation of the .sort(à function. Explain how it's applied here.
    ** Sort() sorts the array by default alphabetically or numerically in ascending fashion. It does not duplicate the array but only sorts the pre-existing one. It uses the 'orderByYear' parameter that pre-determines an ascending numerical order for movie year.
* Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array  before and after the createList function. What's the difference? Can you explain why there is a difference?
    ** by console.log(movies); before and after the createList function we don't see any difference in the result.
    ** I believe the instructions are unclear, but I can try to conceptualize that it has to do with the synchronous nature of Javascript. 