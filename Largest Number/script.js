//Name:LargestNumber (int->string)
//Purpose: Arranges the numbers in an array
//         into their largest possible configuration
//         Note: returns them as a string to avoid overflow
//         (so it's basically a sort)
const nums = [22,23,12,15,105,999]
var obj = {};
//Throw everything into our dictionary
for(var number of nums)
{
  number = number.toString(); //Make it into a string to make it enumerable
  console.log(number);
  for(var digit of number)
  {
    console.log(digit);
    if(obj[digit] === undefined)
    {
      obj[digit] = 1;
    }
    else
      obj[digit] +=1;
  }
}
for (var i=0; i <10; i++)
{
  console.log(i);
}

console.log(obj)
