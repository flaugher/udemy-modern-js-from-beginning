# README

This is all the code from the Udemy course "Modern JavaScript From the Beginning" by Brad Traversy.

[Course](https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8757064#overview)

## Sandbox

Open an HTML file and click the Live Server link on the lower right.

127.0.0.1:5500/js_sandbox/index.html

## Projects

Section 4: DOM Projects - Although I have a folder for each section, all of my work is in the .html and .js files in the 4_1_project_files folder since the work was cummulative.

Section 4 Load Calculator - All work is in 4_4 folder.

Section 4 Number Guesser - 4_8 folder

Section 6 OOP Book List - 6_1 folder

Section 7: Async JS - I did all of the work for the lessons up to 65 in the 7_8 folder.

Section 8: Github Finder - 8_1_project_files.  When using ES6 modules as in this project, if ES6 modules aren't supported in the browser, you'll have to use something like webpack + babel to transpile them.  They are what allows you to have one JS file include another.  In this project we just include multiple script takes in the index page.  But if you didn't want to do that and you wanted to have one JS file include another, you'd have to use a transpiler.  See:

https://bit.ly/2QEAMrB
https://bit.ly/2ENV9Af
https://bit.ly/2QGXZcS

Section 8 Github client ID and secret:
Client ID
b1aa840a1b97bc69fcb3
Client Secret
4333be80e459d49ad77be1eb52311586e5c7f34b

## Techniques

3_3_project_files/js_sandbox/index.html:

- How to select an element by its id
- How to hide element by setting "style.display = none;"
- How to change content of an element.

You can use the older document.getElementById(), but document.querySelector() is newer and much more powerful because you're not limited to selecting an element by an id.

## Examples

    // Change label content:
    document.getElementById('someid').innerHTML = 'new label content'

### select elements

At 10:59 into lesson 31, he goes over select elements which I'll be using.  He had to comment out materialize.js in order to do this example.

    # index.html
    <select>
      <option value="1">value 1</option>
      <option value="2">value 2</option>
      <option value="3">value 3</option>
    </select>

    # app.js
    const select = document.querySelector('select');
    select.addEventListener('change', runEvent);

    // Show select event fires
    function runEvent(e) {
      // Show event fires
      console.log(`EVENT TYPE ${e.type}`);
      // Get what was selected
      console.log(e.target.value);
    }

## Notes

### Event delegation

Event delegation is where you put an event listener of a parent of what you're looking for and then creating a condition to find the target and then perform the action you want on that target.

### Callbacks

A callback is just a function that can be passed into another function and then called by that function.

### Fetch API

I asked a [question](t.ly/X4wt) about support for the Fetch API and was told that if you use it with Promises, there can be issues with error-handling.  The teaching assistant says he uses [axios](https://github.com/axios/axios).  See Resources below.

### Promises

Promises don't work in ES5 environments unless you use either the Bluebird or Q promise libraries.

ES6 supports promises natively as well as the fat arrow (=>) notation.

## Async & Await

He's not sure about compatiblity of these two features (this video is about two years old now so things may have changed).  He recommends compiling code down into ES6 using Webpack and Babel to use them.


### Resources

He uses [skeleton](http://getskeleton.com/) for the CSS in the Ajax section.
He uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the Ajax section.
[Top JavaScript Libraries for Making AJAX Calls](https://dzone.com/articles/top-javascript-libraries-for-making-ajax-calls)
[5 best libraries for making AJAX calls in React](https://hashnode.com/post/5-best-libraries-for-making-ajax-calls-in-react-cis8x5f7k0jl7th53z68s41k1)
[Here are the most popular ways to make an HTTP request in JavaScript](https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/)
JavaScript.Info: [Promises](https://javascript.info/promise-basics)
[JavaScript Promises for Dummies](https://scotch.io/tutorials/javascript-promises-for-dummies)

## Comments

Very good class.  It would be nice if there were a table of contents that list the purpose of each lesson for easy reference.

I found explanation of Promises weak.  Instead of just typing in code, he could have explained what each line is actually doing to reinforce the concept.  The mistake all instructors make is that the don't realize that most students don't sit down and watch these lessons all in one "fell swoop".  There may be a couple of days between lessons and something you understood two lessons/days ago you've kind of forgotten.  The instructor doesn't have this problem because he understands the material.  Something that we watch two lessons ago a couple of days ago that made sense then no longer makes sense now so it needs to be repeated.  By the time I reached the last lesson in Section 7, all the code just looked like a bunch of gobblety-gook.

Would have been nice to spend time talking about CORS policy errors. I ran into that problem as soon as I tried to apply what I learned about making XmlHTTPRequests.