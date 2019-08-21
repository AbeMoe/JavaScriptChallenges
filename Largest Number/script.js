//Name:LargestNumber (int->string)
//Purpose: Arranges the numbers in an array
//         into their largest possible configuration
//         Note: returns them as a string to avoid overflow
//         (so it's basically a sort)
const nums = [22,23,12,15,105]
var obj = {};
for(var number in nums)
{
  for(var digit in number)
  {
    if(obj[digit] === undefined)
    {
      obj[digit] = 0;
    }
  }
}

console.log(obj)
