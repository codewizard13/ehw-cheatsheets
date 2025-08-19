/**
 * Collects and logs all DOM elements that have an explicitly set `z-index` value,
 * along with their tag names and IDs, into a structured console table.
 *
 * The script performs the following steps:
 * 1. Initializes a results array with column headers describing each field.
 * 2. Iterates through every element in the document using `document.querySelectorAll('*')`.
 * 3. Retrieves each element's computed CSS styles via `window.getComputedStyle()`.
 * 4. Extracts the `z-index` property from the computed style.
 * 5. Filters out elements whose `z-index` is `"auto"`, meaning they rely on default stacking context instead of an explicit numeric value.
 * 6. Records valid elements into a row containing:
 *    - The element's tag name (`element.tagName`)
 *    - The element's ID attribute (`element.id`), or an empty string if none
 *    - The numeric z-index value parsed as an integer
 * 7. Outputs the data as a table using `console.table()` for clear visualization in developer tools.
 *
 * This script is useful for debugging stacking context issues in CSS layouts,
 * identifying which elements define custom layering, and quickly auditing the
 * z-index values present in a web page.
 *
 * Example output structure:
 *
 * ┌─────────┬─────────────┬───────────────┬─────────┐
 * │ (index) │ Element Tag │      ID       │ Z-Index │
 * ├─────────┼─────────────┼───────────────┼─────────┤
 * │    0    │    'DIV'    │   'header'    │   1000  │
 * │    1    │    'NAV'    │   'menu'      │   500   │
 * │    2    │    'SECTION'│   ''          │   200   │
 * └─────────┴─────────────┴───────────────┴─────────┘
 *
 * @return {void} No return value; outputs directly to console.
 * 
 * @note This script should be run in a browser console where a document context exists.
 * @see console.table for visualizing tabular data in developer tools.
 * @todo Test and improve (no specific targets yet)
 *
 * @author Eric L. Hepperle
 * @last_modified 2025-08-19
 */


const elementsWithZIndex = [];

// Create the headers for your table
const tableHeaders = ['Element Tag', 'ID', 'Z-Index'];
elementsWithZIndex.push(tableHeaders); // Add the headers as the first row

// Iterate through all elements using querySelectorAll and a for...of loop
for (const element of document.querySelectorAll('*')) {
  const computedStyle = window.getComputedStyle(element);
  const zIndex = computedStyle.zIndex;

  // If the element has a z-index set (not 'auto')
  if (zIndex !== 'auto') {
    elementsWithZIndex.push([
      element.tagName,
      element.id,
      parseInt(zIndex, 10), // Parse to an integer
    ]);
  }
}

// Now, use console.table() to display the 2D array
console.table(elementsWithZIndex);
