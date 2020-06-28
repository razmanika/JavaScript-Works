// function sayhello(firstName, lastName){
//     return "Hello " + firstName + " " + lastName;
// }

// console.log(sayhello("Nikoloz", "Razmadze"));


// function calculation(){
//     for (let i = 0; i<arguments.length; i++){
//         console.log(arguments[i])
//     }
// }

// calculation(6);
// calculation(7,5,8);

'-------------------------------------------------------'
// let x= 10;

// function foo(){
//     var z = 15;
//     console.log(x);
// }


// function foo2(){
//     console.log(x);
// }


// function greeting(firstName){
//     return function(lastName){
//         return "Hello " + firstName + " " + lastName;
//     }
// };

// var testGreeting = greeting('Giorgi');
// var fullname = testGreeting('giorgadze');
// var fullname = greeting('Giorgadze')('Giorgadze');

// console.log(fullname);

// function question(job){
//     if(job==='Developer'){
//         return function(name){
//             return name + " რა არის js?";
//         }
//     }else if(job === 'Teacher'){
//         return function(name){
//             return name + 'რა საგანს ასწავლით?';
//         }
//     }
// }

// function question(job) {
//     const jobDictionary = {
//         Developer: " რა არის js?",
//         Teacher: " რა საგანს ასწავლით?",
//     };
//     return function (name) {
//         return name + jobDictionary[job];
//     }
// }

// const developerQuestion = question('Developer');
// console.log(developerQuestion('Giorgi'))

// const developerQuestion2 = question('Teacher');
// console.log(developerQuestion('Nino'))