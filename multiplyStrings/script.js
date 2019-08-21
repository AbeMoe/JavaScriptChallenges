//Name: multiplyStrings
//Purpose: multiplies two strings by their numeric value
//         and returns the product
//Restraints: cannot simply convert them to integers.
num1="20000";
numberfied1 = Number(num1) // for testing
num1 = num1.split('').reverse().join('')
num2= "55";
numberfied2 = Number(num2) // for testing

num2 = num2.split('').reverse().join('')
console.log(num2);
num1Pow=0;
num2Pow=0;
total=0;
for(int1 of num1)
{

  tempInt1 = (int1.charCodeAt(0)-48) * Math.pow(10,num1Pow);
  num2Pow=0;
  for(int2 of num2)
  {
    tempInt2 = (int2.charCodeAt(0)-48) * Math.pow(10,num2Pow);
    console.log(tempInt1*tempInt2)
    total += tempInt1*tempInt2
    num2Pow+=1;
  }
  num1Pow+=1;
}
    console.log("expected answer is", numberfied1 * numberfied2)
    console.log(total);
