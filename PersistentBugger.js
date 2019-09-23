function persistence(num) {
  let counter = 0;
  let result= num;
  let iterator = String(result).length
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  
 for(x=0; x < iterator;x++){

   let numArr = String(result).split('').map(num => {return Number(num)});
   result = numArr.reduce(reducer)

if(numArr.length !== 1){
  counter++
  x=0
 }
 else{ return counter;}

 }

}