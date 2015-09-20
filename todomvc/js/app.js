// (function (window) { //this function takes window object which represents a window containing the DOM document.
// 		     //I believe the function(window) is saying that in this function the code will be part of the DOM document
// 				//  and be displayed in the browser as part of the page.
// 	'use strict';

	// Your starting point. Enjoy the ride!
	/*       PSEUDOCODE!!!!
	1.) Add eventListener "input" to HTML element <input class="new-todo">
	so that user can input a new task.

	2.) Add an eventListener "change" to <input> children so that they are editable.

	3.) Add class "completed" to <li-data-id="1441746260961" >
	to show a task is complete when <input class="toggle"> is clicked.

	4.) Remove the class "completed" from <li-data-id="1441746260961">
	to show a task is complete when <input class="toggle"> is clicked.

	5.) Add a <button> with a class "destroy" that will allow the user to
	delete a task if there is a typo.

	6.) Change <button> so that style goes from "display: block" to "display: none"
	to delete tasks marked as complete.

	7.) When <a href="#/active"> is clicked the class "selected" is added
	and the view is changed to show only <label> elements who's corresponding
	<li> does NOT have the class "completed"
*/
// })(window);
// 1 I can add a task to my todo list so that I can remember to do it later.
// 1.) Add eventListener "input" to HTML element <input class="new-todo">
// so that user can input a new task.

var task = document.querySelector("new-todo");

function logTask () {
	// var collectedTask = [task.value];
	console.log (collectedTask);
};

task.addEventListener('input', logTask);





// User Stories
// 1 I can add a task to my todo list so that I can remember to do it later.
// 2 I can edit a task on my todo list so that I can correct typos.
// 3 I can mark a task as complete so that I remember that I have done it.
// 4 I can mark a completed task as incomplete so that I actually complete it this time.
// 5 I can delete a task from my todo list so that I don't have to see it any more.
// 6 I can delete all the completed tasks from my todo list so that I can clean up completed tasks.
// 7 I can filter the list of tasks so that I can see just what tasks I have completed and what are left to do.
