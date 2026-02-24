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