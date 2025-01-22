let person ={name: "tiya",
    place: "kochi",
};
console.log(person);
console.log(person.name);

let car={name: "kia",
    color:"silver",
};
console.log(car);
console.log(car.color);


// array 
let fruits = ["apple","grapes","orange",12]
console.log(fruits)
console.log(fruits[0]);
console.log(fruits.length);
let people=[{name:"chikku",place:"xyz"},{name:"juva",place:"abc"},{name:"emy",place:"ijk"}];
console.log(people);
console.log(people[1]);
console.log(people[1].name);

//function
function addNumb(a,b) {
    let c=a+b;
    console.log(c);
}
addNumb(2,3);

//name without space in between
function fullName(firstname,secondname){
    let fullName=firstname+secondname;
    console.log(fullName);
}
fullName("mary","juvana");

// name with space in between
function fullname(fname,lname){
    let c = `${fname} and ${lname}`
console.log(c);
}
fullname("mary","juvana");

// loops
for(let i=1;i<=5;i++)
{console.log(i);}
