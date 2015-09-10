
/*
On this page JavaScript changes the class on two HTML <a href> (cbp-vm-grid) and (cbp-vm-list) and a <div>
when the icon is clicked.

There are two icons that when clicked change the view of the page. They do this by having JavaScript
add "cbp-vm-selected" to the class of the icon that was clicked.

One icon is a list view and when clicked javascript appends it's class AND the class of the div
to show it is the list icon that is selected.When it does the CSS rules for the list class display.

The other icon is a grid. When it is clicked javascript appends its class to "cbp-vm-selected" and adds
"cbp-vm-view-grid" to the div which then triggers the CSS rule to apply the grid styling to the div.

Like I wrote in the Nested Accordian scripts.js, I don't really understand DOMs however I imagine that a window object would be called for in this case
because the page is open in a tab on my browser which is a window.

Also the document object would be the entry point into the web pages' content i.e. it helps return HTML elements
in the browser.
