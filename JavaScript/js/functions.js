const user = {
    name: "Nika",
    age: 20,
};

function getObj(obj) {
    console.log(obj);
    obj.name = "Giorgi";
    console.log(obj);
}

getObj(user)


const square = function (x) {
    return x * x;
};

console.log(square(5));

(function () {
    console.log(5);

})();

(function (msg) {
    console.log(5);

})('Hello world');




// const names = ['George', 'Nino', 'Nikolozi', 'Davit'];
// => [6,4,5,3]

// let newArray = [];

// for (let i = 0; i < names.length; i++){
//     newArray.push(names[i].length);
// }
// console.log(newArray);


// let newArray2 = [];

// for (let i = 0; i < names.length; i++){
//     newArray2.push(names[i].toUpperCase());
// }
// console.log(newArray2);

// function mapArray(arr, fn) {
//     var res = [];
//     for (let i = 0; i < name.length; i++) {
//         res.push(fn(name[i]));

//     }
//     return res;
// }

// function nameLenght(el) {
//     return el.length;
// }

// function nametoUpperCase(el) {
//     return el.toUpperCase();

// }

// let res1 = mapArray(names, nameLenght);
// let res2 = mapArray(names, nametoUpperCase);

// console.log(res1)
// console.log(res2)