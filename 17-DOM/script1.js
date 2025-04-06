let div = document.querySelector('div');

console.dir(div);

console.log(div);

console.log(div.children); // div has 4 childrens . children property returns a HTMLCollection object which is a collection of all the child elements of the div.

console.log(div.firstChild);

console.log(div.lastChild);  // 

console.log(div.childElementCount);


console.log(document.body.firstChild);// spaces count as text node . so text will be first child of body.


console.log(document.body.childNodes); // returns a NodeList object which is a collection of all the child nodes of the body.

console.log(div.childNodes[0] === div.firstChild); // element.childNodes[0] is the same as element.firstChild.

console.log(document.body.firstChild);
console.log(document.body.lastChild);


console.log(document.body.lastChild === document.body.childNodes[document.body.childNodes.length-1])


console.log(document.body.parentNode);
console.log(document.body.parentElement);