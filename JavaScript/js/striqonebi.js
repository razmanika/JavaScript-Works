const firstName = "Denis";
const lastName = "Darko";
const age = 30;
const str = "Hello my name's Denis";

let value;

value = firstName + lastName;
value = firstName + " " + lastName;
value += " and i am " + age;

console.log(value);


value = firstName.length;
value = firstName[2];
value = lastName[lastName.length - 1];
value = firstName[firstName.length - 1];
console.log(value);

value = firstName.toUpperCase();
value = lastName.toLowerCase();
value = lastName.concat(" ", lastName, " ", 3); // raime cvlads daumatot raime value = firstName + lastName; msgavsad
console.log(value);

value = str.indexOf('i',15); // 15 radgan 14-ze gvxvdeba pirveli i da rom modzebnos meore( mokled saidanac unda edzios imis shesabamisi ricxvi gvinda)
value = str.indexOf('!'); // tu ar aris es simbolo yoveltvis abrunebs -1s
// value = str.includes("am");
console.log(value);

value = str.slice(0, -3);
console.log(value);

value = str.replace("De", "Ni");
console.log(value);