console.log("tut 2");
// alert("hello buddy");
// let a = prompt("type something");
// console.log(a);    
// let b = confirm(" do you wanna delete??");
b = history;

b = document.scripts;
console.log(b);

let a = document.links;
Array.from(a).forEach(element => {
    if (element.href.includes("ankit")) {
        console.log(element.href);
    }
});