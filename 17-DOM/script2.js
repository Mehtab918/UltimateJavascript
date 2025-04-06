 console.log(document.body.parentElement); /// will return HTML 

console.log("---------");

 console.log(document.getElementById("inner").parentNode); // output: <div id="outer"> 
 
 console.log("---------");

 console.log(document.getElementById("inner").parentElement);


 console.log("---------");

 console.log(document.body.firstChild);  // comment node if have other wise text node will return

 console.log(document.body.firstElementChild);
