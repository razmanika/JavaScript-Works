function multiply() {

    for (let i = 0; i<arguments.length; i++){
        let value = 1;
        value *= arguments[i]*6;
        console.log(value);
    }
}
multiply(1,2,3);


// function reverseStr(text) {

//     let reversed;

//     for (let i = 0; i < text.length; i++) {
//         reversed = text[i].push;
//         return reversed;
//     }
//     console.log(reversed);
// }

// reverseStr("nikusha");