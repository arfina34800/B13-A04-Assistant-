1 no ans:
Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById

Purpose: Selects a single element by its id.

Return type: A single element (or null if not found).

Note: Each id must be unique in HTML.

getElementsByClassName

Purpose: Selects all elements with a specific class.

Return type: HTMLCollection (like an array, but live).

Note: Updates automatically if elements are added or removed in the DOM.

querySelector / querySelectorAll

querySelector → selects the first matching element.

querySelectorAll → selects all matching elements as a NodeList.

Note: Uses CSS selectors (#id, .class, div > p, etc.). NodeList is static (does not auto-update)



2 no ans:
You create a new element using document.createElement(), set its content or attributes if needed, and insert it into the DOM using methods like appendChild() or insertBefore().

3 no ans:
Event Bubbling is a type of event propagation in the DOM where an event triggered on a child element bubbles up to its parent elements, all the way to the document root, unless it is stopped.

How it works:

When an event (like click) occurs on an element, it first runs on that element (the target).

Then the same event automatically triggers on its parent, then the parent’s parent, and so on, moving up the DOM tree.

You can stop it from bubbling using event.stopPropagation().

 Event starts at the innermost element and moves upward through its ancestors.

 4 no ans:
 Event Delegation in JavaScript is a technique where you attach a single event listener to a parent element instead of multiple listeners on individual child elements, and then handle events on the children using the event’s target property.

Why it is useful:

Reduces memory usage by minimizing the number of event listeners.

Automatically works for dynamically added elements.

Makes code cleaner and easier to maintain.


5 no ans:
Difference between preventDefault() and stopPropagation() in JavaScript:

preventDefault() → Stops the browser’s default action for an event (e.g., prevents a link from navigating, a form from submitting).

stopPropagation() → Stops the event from bubbling or capturing further in the DOM tree, preventing parent elements from receiving the event.

