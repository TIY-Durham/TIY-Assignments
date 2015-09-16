### [Display Property] (http://learnlayout.com/display.html)

Controls how HTML elements display in a page.

**Example Values**

`block`: Displays on new line and extends left to right. `<div>`, `<p>`, `<form>`
`inline` : Does not disturb the flow of the other elements. `<span>`, `<a>`
`none` : Hides an element as though it does not exist on a page. Often used with JavaScript to hide and show elements without deleting and recreating them. `<script>`


###[Margin] (https://developer.mozilla.org/en-US/docs/Web/CSS/margin)

Property that sets the margin for all four sides of an element. Uses px. 


###[Box-Sizing] (http://learnlayout.com/box-sizing.html)

Allows you to set a `box-sizing: border-box;` to make the padding and border of an element no longer increase in width.


###[Position] (http://learnlayout.com/position.html)

Property whose values effect the position of an element in the page. 


###[::before] (https://developer.mozilla.org/en-US/docs/Web/CSS/%3A%3Abefore)

Pseudo-element that is first child of the element it is under. Adds cosmetic content to an element by using the content property. Inline by default.


###[::after] (https://developer.mozilla.org/en-US/docs/Web/CSS/::after)

Pseudo-element that matches the last child of the selected element. Adds cosmetic content to an element by using the content property. Inline by default. 


###[Pseudo-Elements] (https://github.com/Ricecoder/TIY-Assignments/edit/09--fistful-of-dollars/CheatSheets/CSS.md)

Elements added to selectors that allow you to style certain parts of a document instead of describing a special state.


###[Content] (https://developer.mozilla.org/en-US/docs/Web/CSS/content)

Used with `::before` and `::after`. Generates content in an element. They are anonymous replaced elements.

**Example Values**

* `static` : default value. Element is considered _not positioned_ if set to this value.
 `relative` : Behaves like status unless `top`, `right`, `bottom`, or `left` is added. Adjusts away from its normal position but other content does not adjust with it. 
 `fixed` : Element remains in the same place on a page even when scrolled. `top`, `right`,  `bottom`, and `left` are used.
 `absolute` : Similar to fixed except it remains relative to the _nearest positioned ancestor_ or document body.


###[Float] (http://learnlayout.com/float.html)

Wraps text around images. Used with `top`, `right`, `bottom`, or `left`.


###[Clear] (http://learnlayout.com/clear.html)

Controls the behavior of floats by moving floated elements below preceding elements.


###[Percent Width] (http://learnlayout.com/percent.html) 

Used with images to help with resizing. It uses a percent measurement unit that is relative to the containing block. 


###[Media Queries] (https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

Media queries enable specified media types to be custom displayed for various output devices.


###[Inline-Block] (http://learnlayout.com/inline-block.html)

Used to create grids of boxes.


###[Padding] (https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

Space between the element and it's border. Measured in px. Can be set for `top`, `right`, `bottom`, or `left`


###[Column] (http://learnlayout.com/column.html)

Properties used to make multi-column text. Must be used with prefixes like `webkit` and `moz`.

###[Border] (https://developer.mozilla.org/en-US/docs/Web/CSS/border)

Creates a border around an element. Values include; width (in px), style, and color. 


###[Max-Width] (https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)

Sets the max width of an element. Overrides width but not min-width. Uses pxs. 


###[Min-Width] (https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)

Sets the minimum width of an element. Overrides both max-width and width. Uses pxs. 
