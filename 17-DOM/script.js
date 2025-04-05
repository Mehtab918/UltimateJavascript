console.log("Hii");

console.log(window);
console.dir(document);



console.log(document.body);
console.dir(document.body);


console.log(document.head);


console.log(document.body.childNodes[1]);

// accessing the element by its id

let p = document.getElementById("para1");

console.dir(p);

document.body.childNodes[7].style.backgroundColor="red";

//console.log(buttonColor);


let v =document.getElementsByTagName("p");

console.log(v);


let insidePara = document.body.childNodes[7].innerHTML ="Hello World";
console.log(insidePara);

let firEl = document.querySelector("p");
console.log(firEl);


let allEl = document.querySelectorAll("p");
console.log(allEl);

//NodeList is Live — it updates as the DOM changes 

let parentDiv = document.getElementById("parent"); // get the actual element
console.log("Children of parentDiv: ", parentDiv.childNodes.length);          // if you want to check child nodes

let newNode = parentDiv.appendChild(document.createElement("p")); 

console.log(newNode);

console.log("Children of parentDiv after appending a new node: ", parentDiv.childNodes.length);


console.log(document.body.children);  //HTMLCollection returns a live collection of child elements of the body element.

console.log(document.body.childNodes);  // childNodes will return a NodeList of all child nodes of the body element.
