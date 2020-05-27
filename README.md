# README

This is all the code from the Udemy course "Modern JavaScript From the Beginning" by Brad Traversy.

[Course](https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8757064#overview)

## Sandbox

Open an HTML file and click the Live Server link on the lower right.

127.0.0.1:5500/js_sandbox/index.html

## Projects

Section 4: DOM Projects - Although I have a folder for each section, all of my work is in the .html and .js files in the 4_1_project_files folder since the work was cummulative.

Section 7: Async JS - I did all of the work for the lessons up to 65 in the 7_8 folder.

## Techniques

3_3_project_files/js_sandbox/index.html:

- How to select an element by its id
- How to hide element by setting "style.display = none;"
- How to change content of an element.

You can use the older document.getElementById(), but document.querySelector() is newer and much more powerful because you're not limited to selecting an element by an id.

## Examples

    // Change label content:
    document.getElementById('someid').innerHTML = 'new label content'

### <select> elements

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

### Comments

Very good class.  It would be nice if there were a table of contents that list the purpose of each lesson for easy reference.

### Resources

He uses [skeleton](http://getskeleton.com/) for the CSS in the Ajax section.
He uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the Ajax section.