//Name: multiplyStrings
//Purpose: multiplies two strings by their numeric value
//         and returns the product
//Restraints: cannot simply convert them to integers.
num1="200";
num2="350";
power=0;
total=0;
console.log(Math.pow(10,power))
for(int1 of num1)
{

  tempInt1 = int1.charCodeAt(0)-48;
  for(int2 of num2)
  {
    tempInt2 = int2.charCodeAt(0)-48;
    console.log((tempInt1 * tempInt2) * (Math.pow(10,power)));
    total += (tempInt1 * tempInt2) * (Math.pow(10,power))
  }
  console.log(total);
  power+=1;
}
console.log(total);
