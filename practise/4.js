console.log("tut 4");
let element = document.createElement('li');
element.id = 'createdid';
element.className = 'createdclass';
element.setAttribute('title', 'mytitle');
element.innerHTML = "this is created by me."
let chan = document.getElementById('first');
chan.appendChild(element);
console.log(element);