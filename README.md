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
