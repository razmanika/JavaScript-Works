const user = {
    firstName : "Nikolozi",
    lastName : "Razmadze",
    age : 20,
    isAdmin: true,
    email: 'it.nrazmadze@newvision.ge',
    skills:['html','js','css'],
    'user-address':{
        city: "Tbilisi",
        street: "Sairme N11",

    }
};

let value;
let prop = 'email';

value = user.firstName;
value = user['firstName'];
value = user['user-address'].city;
value = user[prop];


user.firstName = 'Giorgi';
user.info = 'some info';

console.log(value);
console.log(user);
