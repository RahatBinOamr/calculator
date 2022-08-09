
var array = [3 , -6, 2, 56, 32, -5, 89, 32,-110];
function largestNumbers (array){
   
    var positiveValue = [];

for (i=0; i<=array.length;i++){
    if (array[i]>0) {
        positiveValue.push(array[i]);
    }
    else if (array[i] < 0){
        break;
    }
}
return positiveValue;
}
console.log(array );
const Value = largestNumbers(array);
console.log('positive Number is = ' , Value);