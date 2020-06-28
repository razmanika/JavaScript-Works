const num1 = 10;
const num2 = 20;

let value;

value = num1 + num2;

console.log(value)

value = value + 100; // value += 100;
console.log(value);


value++;
console.log(value);
value--;
console.log(value);



value = 0.7 + 0.6;
console.log(parseFloat(value).toFixed(1)); // mdzimis mere 1 ricxvi. mtelebze ase unda vqna


console.log(parseFloat("412day")) // tu araris gamotoveba da iwyeba ricxvit gamoaqvs ricxvi mxolod


// value = Math.PI;
value = Math.floor(Math.random() * (51 - 20)) + 20; // value = Math.floor(Math.random() * (max - min)) + min; 20 dan 50 mde random ricxvebi
// value = Math.round();
// value = Math.ceil(6.01);

value = Math.min(2, 10, 12, 0, 15, 9);

console.log(value);



//1
value = Math.PI;
console.log(parseFloat(value).toFixed(2));

//2

max_value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(max_value);

//3
x = 3
random_number = Math.random();
console.log(parseFloat(random_number).toFixed(x));


//4

sum = 0.6 + 0.7;
console.log(parseFloat(sum).toFixed(1));

//5

str = "100$";
console.log(parseFloat(str));