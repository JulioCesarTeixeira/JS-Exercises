# READ IT
## EX 11
* What's the difference with the previous exercises? What are we dealing with here?
* Where exactly do we define to only render the title

** We are dealing with an array of objects here. It's not a simple array anymore. 
In the .map(title => wrapWithTag(title, `li`)) was defined to only render the title as <li>. map is the correct way to work with array of objects.