console.log(id1); // not a good approach to get id's.

//do like this 
let id = document.getElementById("id1");
console.log(id);

console.log(id.matches(".class"));
console.log(id.matches(".box"));


let birds = document.querySelectorAll("li");

// console.log(birds); 

for(const bird of birds)
{
    if(bird.matches(".endangered"))
    {
        console.log(`${bird.textContent} is endangered`);
    }
}

let para = document.querySelectorAll("p")

console.log(para);

//closest() 

let el = document.getElementById("div-03");
console.log(el);

console.log(el.closest("#div-02"));

