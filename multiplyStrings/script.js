//Name: multiplyStrings
//Purpose: multiplies two strings by their numeric value
//         and returns the product
//Restraints: cannot simply convert them to integers.
num1="200";
num1 = num1.split('').reverse().join('')
num2="350";
num2 = num2.split('').reverse().join('')
console.log(num2);
basePow=0;
movingPow=0;
total=0;
for(int1 of num1)
{

  tempInt1 = int1.charCodeAt(0)-48;
  for(int2 of num2)
  {
    movingPow=basePow;
    tempInt2 = int2.charCodeAt(0)-48;
    total += (tempInt1 * tempInt2) * (Math.pow(10,movingPow))
    movingPow+=1;
  }
  basePow+=1;
}
    console.log(total);
