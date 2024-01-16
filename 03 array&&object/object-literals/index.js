let x;

const person = {
    name: 'huy',
    age : 19,
    isAdmin : true,
    address : {
        street : 'thai thuy',
        city : 'thai binh',
        status: 'hello',
    },
    hobbies : [ 'music' , 'playgame' ] , 
};

x = person.name;
x = person['age'];
x = person.address.status;
x = person.hobbies[0];

console.log(person);

person.name = 'thao';
person['isAdmin'] = false;

//delete
delete person.age;

//create
person.hasChildren = true;

//add function
person.greet = function(){
    console.log(`hello , my name is ${this.name}`);
};

person.greet();

const person2 = {
    'first name' : 'vu',
    'last name' : 'huy',
};

x = person2['first name'];

console.log(x);