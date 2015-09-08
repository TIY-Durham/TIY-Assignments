# TIY-Assignments
# About JavaScript

## Basic Literal Types

### null

One of JavaScript’s primitive values. It represents “empty” or “no value”. It can be used when an object can have value but there is currently none. 

`var nada = null` //
`null`

### Boolean

One of JavaScript’s primitive values. It is a data type that only has the values “true” or “false”.

`Boolean(4>5)` //
`false`

### Number

One of JavaScript’s primitive values. It is a numerical data.

`3.1419`

### String

One of JavaScript’s primitive values. It is a group of text that is enclosed in either ‘ or “. It is how text is separated from the code that the computer reads.

`"This is a string"`

## Basic Operators

### Arithmetic

An operator that takes numerical values as its operands and returns a single number. It follows basic mathematic principles. Uses `+` `-` `*` `/`

`2 + 2` // `4`

### Comparison
Operators that are used to compare (in various ways) two operands.

  * Equality Operators
  
    `==` Converts the operands if they are not the same type and then compares them.
    Ex:  `0 == false` // `true`
    
    `!=` Returns true if the operands are not equal.
    Ex: `1 != 2` // `true`
    
    `===` Returns true if the operands are equal without conversion.
    Ex: `1 === '1'` // `false`
    
    `!==` Returns true if the operands are not equal and/or not the same type.
    Ex: `1 !== 2` // `true`
    
  * Relational Operators
    `>` Greater than: Returns true if the left operand is greater than the right.
    Ex: `2 > 1` // `true`
    
    `<` Less than: Returns true if the left operand is less than the right. 
    Ex: `1 < 2` // `true`
    
    `>=` Greater than or equal to: Returns true if the left operand is greater than or equal to the right.
		Ex: `1 >= 1` // `true`
		
		`<=` Less than or equal to: Returns true if the left operands is less than or equal to the right.
		Ex: `1 <= 2` // `true`
		
### Assignment
An operator that assigns a value to the left operand based on the value of the right.
  
  `var` Stands for variable. It allows values to be assigned to a specific property.
  Ex: `var x = 0` // `x === 0`
  
  `=` Assigns the value of the right operand to the left
	Ex: `var zero = 0` // `zero` now equals `0`
	
	`+=` Adds the value of the right operand to the left operand and assigns the value to the variable.
	Ex:	`1 += 3`	//	`4`
	
	`-=` Subtracts the value of the right operand from the value on the left and assigns the new value.
	Ex:	`5 -=3` // `2`
	
	`*=` Multiplies the value of the right operand by the value of the left and assigns the new value.	
	Ex:	`2 *= 3` // `6`
	
	`/=` Divides the value of the right operand by the value on the left and assigns the new value.
	Ex:	`10 /= 5` // `2`

## Built-In Constants

### Undefined

Assigned to a variable or argument when no value has been defined.

`var X;
	if (x === undefined) {
	do something };`

###NaN

Stands for Not a Number
	
	`var x = “one”` 
	`x * 3` 
	`NaN`

###Infinity

Value representing numerical infinity.
	
`2 / 0` //
`Infinity`

##Others

### Functions

Functions are a form of [control flow](http://en.wikipedia.org/wiki/Control_flow) used in computer programs. They are code that executes more code within the `{}`. 

### `function` keyword

The `function` keyword is used to _define_ a function with parentheses and curly braces:

    // This is a Function Definition for `whatever`...
    function whatever ( /* arguments go here */ ) {
      // body of function goes here
    }

Once a function has been defined, it can be _invoked_ by 
`whatever()`

###typeof

`typeof` is an operator followed by only one operand. It returns the type of the operand. 

`typeof "Hello" // “string"`

###if, else statement

	Statement that says if what is in the first statement is true then run the code that is in the {}. Else run this code. 

	if ( 3 > 2) {
    	    // run this code
	}

	else {
  	    // run this code
	}

###{} Block Operator

Delimits a block statement. 

   `{
    	statement A;
    	statement B;
    }`

###while statement

Creates a loop. Used when the number of repeats needed is not known. Will continue to repeat _as long as_ the condition is `true`

	`while(condition) {
		//code;
	 }`

ex: This is a loop within a function. It will print `“I’m looping!”` three times. 

	`var count = 0;
	 var loop = function(count) {
		while(count <3 ) {
			console.log(“I’m looping!”);
			count ++;
		}
	 };`

###do-while loop

A `do-while` loop runs _at least once_ no matter what, then checks if the conditions is true (it will run as long as it is true).

	`do
		//statement;
	 while (condition);`

ex: This will run once, printing out `“I’m going to stop looping because my condition is false!”`.

	`var loopCondition = false;
	 do {
		console.log(“I’m going to stop looping because my condition is false!”);
	 } while (loopCondition);`
	
###Switch Statement

A statement that evaluates an expression by matching it’s value to a _case clause_ and executes the code within the clause if it is the same. 

	‘switch (expression) {
	    case value1:
		//code
		break;
	    case value2:
		//code
		break;
	    case value3:
		//code
		break;
	    default:
		//code that executes if none of the values match
	 }`

###For Loop
	
A `for loop` repeats a specified amount of times till the condition evaluates false.

ex: This will print out from 1-10 (i.e. 1, 2, 3…10) 

	`for (var i = 1; i < 11; i ++) {
		console.log (i);
	}`

###For…In Loop
	
A `for…in` loop repeats a specific variable over a set of properties in an object. For each property it executes a specific statement.

	`for (variable in object) {
  		//statements
	}`

ex: In this example the properties in `myObj` are pushed into the array `myKeys`.


	`var myObj = {a: 1, b: 2, c: 3}, myKeys = [];
 
	for (var property in myObj) {
  		  myKeys.push(property);
	}`
 
	`myKeys; //['a','b','c'];`
	
##[Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

A programming interface for HTML, XML, and SVG documents, connecting webpages to scripts. It represents the document as a structured group of nodes and objects (in tree form) making it accessible and changeable. The nodes can have events attached to them. 

###[Window object](https://developer.mozilla.org/en-US/docs/Web/API/Window)

An object representing a window containing a DOM document. 

**Properties**:

*_document_: This property returns the DOM document which is loaded in the window.

*_location_:  Gets/sets the location(URL) or the window object. 

*_history_: Returns a reference to the history object.

**methods**: 

*`Window.alert()`: Displays an alert dialog.

*`Window.confirm()`: Displays a dialog box with a message the user needs to respond to.

*`Window.reload()`: Reloads the window. 
 
*`Window.open()`: Opens a new window.
 
*`Window.close()`: Closes the current window.


###[Location object](https://developer.mozilla.org/en-US/docs/Web/API/Location)

The Location interface represents the location of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the Document and Window interface have such a linked Location, accessible via Document.location and Window.location respectively. 


###[Document object] (https://developer.mozilla.org/en-US/docs/Web/API/Document)

The object created in the browser when a web page loads. Entry point into the web page’s content. Depending on the kind of the document (e.g. HTML or XML), different APIs may be available on the document object.

**Properties**:

*`head`: Returns the <head> element of the current document.

*`docment.body`: Returns the <body> element of the current document.

**methods**: 

*`document.getElementById()`: Returns an object reference to the identified element.

*`document.getElementsByClassName`: Returns a list of elements with the given class name

*`document.querySelector`: Returns the first Element node within the document, in document order, that matches the specified selectors.

*`document.querySelectorAll`: Returns a list of all the Element nodes within the document that match the specified selectors.

*`create`: Creates whatever is specified i.e. document

*`document.write`: Writes text in a document

###[HTMLElement] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

The main component of HTML documents. 

**Properties**:

*[`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id): The id global attribute defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).

*[`className`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class): Classes allows CSS and Javascript to select and access specific elements via the class selectors or functions like the DOM method document.getElementsByClassName. 


*[`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML): property sets or gets the HTML syntax describing the element's descendants. 

*[`outerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML): The outerHTML attribute of the element DOM interface gets the serialized HTML fragment describing the element including its descendants. It can be set to replace the element with nodes parsed from the given string. 

* [`parent`, `children`, `nextSibling`, and `firstChild`](https://dom.spec.whatwg.org/#concept-tree-child): Inheritance. Parent is the root, child inherits from the parent, nextSibling also inherits from the parent but is separate from its sibling, firstChild is the first child called. 

**methods**: 

*[`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener): A method that registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events (such as XMLHttpRequest).

*[`EventTarget.dispatchEvent()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent): Dispatches an Event at the specified EventTarget, invoking the affected EventListeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) apply to events dispatched manually with dispatchEvent().

*[`Attribute`](https://developer.mozilla.org/en-US/docs/Glossary/Attribute): An attribute extends a tag, changing tag behavior or providing metadata. An attribute always has the form name=value (giving the attribute's identifier and the attribute's associated value). 

###[HTMLCollection] (https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)

Interface that represents a generic collection of elements and offers methods and properties when selecting from the list. They are like arrays in that they are a list containing data, however, the each item contains multiple pieces of data.  

###[NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

List containing objects that are collections of nodes and are returned by Node.childNodes and the document.querySelectorAll method. 

	


