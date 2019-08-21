//Name:LargestNumber (int->string)
//Purpose: Arranges the numbers in an array
//         into their largest possible configuration
//         Note: returns them as a string to avoid overflow
//         (so it's basically a sort)
const nums = [3,30,34,5,9]
var obj = {};
//Throw everything into our dictionary
for(var number of nums)
{
  number = number.toString(); //Make it into a string to make it enumerable
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
returnString = "";
for(var i=9;i>=0;i--)
{
  if(obj[i] != undefined)
  {
    console.log(i)
    while(obj[i] > 0)
    {
      returnString+=i;
      obj[i]-=1;
    }
  }
}
console.log(returnString);
