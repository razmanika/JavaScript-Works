// var income = 45;

// if(income>50) alert('შემოსავალი მეტია 50-ზე');

// if (income>50){
//     var text1 = 'შემოსავალი მეტია 50-ზე';
//     alert(text1);
// }

// else if(income>90){
//     var text1 = "შემოსავალი მეტია 90-ზე"
//     alert(text1);
// }

// else if(income > 95){
//     var text1 = "შემოსავალი მეტია 95-ზე";
//     alert(text1);
// }
// else{
//     var text1 = 'შემოსავალი ნაკლებია 50-ზე';
//     alert(text1);
// }


// switch(income){
//     case 100:
//         console.log('შემოსავალი ტოლია 100-ის');
//         break;
//     case 200:
//         console.log('შემოსავალი ტოლია 200-ის');
//         break;
//     case 300:
//         console.log('შემოსავალი ტოლია 300-ის');
//         break;
//     default:
//         console.log("unedfined");
//         break; 

// }

// var a = 2;
// var b = 2;
// var result = a < b ? a+b : a-b;
// console.log(result);



var income = 100;
var strIncome = "100";
var isDeposit = true;
var result1;
var result2;


result1 = income == strIncome; //  True
result2 = income === strIncome; // tipebs adarebs (False)



result1 = income != strIncome; //
result2 = income !== strIncome; // tipebs adarebs

result1 = income > 10 && isDeposit ==true;
result1 = income > 10 || isDeposit ==true;


result1 = !(isDeposit);


console.log(result1);
console.log(result2);