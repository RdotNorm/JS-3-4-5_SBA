class User{
    
    constructor(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;

    }
}
let first = document.getElementById('fname');
let last = document.getElementById('lname');
let age = document.getElementById('age');
let greeting = document.querySelector('div');

let btn = document.querySelector('button');
function submit(){
     document.body.style.backgroundColor = 'blue';
    let user1 = new User(first.value, last.value, age.value);
    greeting.innerHTML = ` Hello, ${user1.firstname} ${user1.lastname}! You are ${user1.age} years old.`;
    console.log(user1);
}
btn.addEventListener('click',submit);