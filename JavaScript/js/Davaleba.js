//1
var inPut='';

if(inPut == 'hidden'){
    inPut = 'visible';
}
else if(inPut == 'visible'){
    inPut;
}
else{
    alert('Hidden or Visible')
}
console.log(inPut)



//2
var value = 100;

var result = value < 0 ? value="less then zero": value = value*10; 
if (value == 0){
    result == 1;
}
console.log(result);

//3
var a;

switch(a){
    case 'block':
        console.log('block');
    case 'none':
        console.log('none');
    case 'inline':
        console.log('inline');
    default:
        console.log('other');
        
}



//4
let b = 'hidden';
result1 = b == "hidden" ? b="visible" : b="hidden";
console.log(result1);