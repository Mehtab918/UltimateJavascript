let child = document.body.firstElementChild;

console.log(child); //container

let innerChildTable= child.firstElementChild;

console.dir(innerChildTable); // return the table element.

console.log(innerChildTable.rows); // HTMLCollection of all rows in the table.
console.log(innerChildTable.tHead);
console.log(innerChildTable.tFoot);
console.log(innerChildTable.tBodies); // HTMLCollection of all tbody elements in the table.


/*
firstChild will returns the nodes as text , comment or other type of nodes.

firstElementChild will returns only the element nodes.
*/



console.log(innerChildTable.rows[0])