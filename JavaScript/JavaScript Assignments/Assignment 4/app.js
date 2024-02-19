//-----Question No. 1-----

var Password = "Hello";

var userPass = prompt("Please enter your password:");

if (!userPass) {
    alert("Please enter your password.");
}

else if (userPass === Password) {
    alert("The password you entered matches the original password.");
} 

else {
    alert("Incorrect password.");
}

//-----Question No. 2-----

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//-----Question No. 3-----

//--Part A--

const futureStudents = [];

//--Part B--

const futureStudentsObject = new Array();

//--Part C--

const fruits = ["guava", "apple", "orange", "banana"];

//--Part D--

const evenNumbers = [2, 4, 6, 8, 10, 12]; 

//--Part E--

const booleanValues = [true, false, true, false];

//--Part F--

const mixedData = ["orange", 63, true, "apple", false];

//--Part G--

const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


//-----Question No. 4-----

//--Part A--

var colorArray = ["red", "green", "blue", "yellow", "orange"];
console.log("Initial array of colors:", colorArray);

//--Part B--

var newColorStart = prompt("Enter a color to add to the beginning:");
colorArray.unshift(newColorStart);
console.log("Updated array (added to beginning):", colorArray);

//--Part C--

var newColorEnd = prompt("Enter a color to add to the end:");
colorArray.push(newColorEnd);
console.log("Updated array (added to end):", colorArray);

//--Part D--

colorArray.unshift("purple", "pink");
console.log("Updated array (added two colors to beginning):", colorArray);

//--Part E--

colorArray.shift();
console.log("Updated array (removed first color):", colorArray);

//--Part F--

colorArray.pop();
console.log("Updated array (removed last color):", colorArray);

//--Part G--

var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
var colorToAdd = prompt("Enter the color to add:");
colorArray.splice(indexToAdd, 0, colorToAdd);
console.log("Updated array (added color at specified index):", colorArray);

//--Part H--

const indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
const numColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colorArray.splice(indexToDelete, numColorsToDelete);
console.log("Updated array (removed colors at specified index):", colorArray);

//-----Question No. 5-----

var studentScores = [85, 92, 78, 95, 88];
studentScores.sort((a, b) => a - b);
console.log("Sorted student scores in ascending order:", studentScores);

//-----Question No. 6-----

 var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

 document.write('<select id="manufacturerSelect">');
 for (var i = 0; i < manufacturers.length; i++) {
   document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
 }
 document.write('</select>');

//-----Question No. 7-----

var tableNumber = parseInt(prompt("Enter the number for which you want to print the multiplication table:"));
var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

tableNumber  = tableNumber ? parseInt(tableNumber) : 5;

document.write("<h2>Multiplication Table of " +tableNumber  + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(tableNumber  + " x " + i + " = " + (tableNumber * i) + "<br>");
}
 
//-----Question No. 8-----

//--Part A--
document.write("<p>Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
  }
  document.write("</p>");

//--Part B--
document.write("<p>Reverse counting: ");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
  }
  document.write("</p>");  

//--Part C--
document.write("<p>Even: ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
  }
  document.write("</p>");

//--Part D--
document.write("<p>Odd: ");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
  }
  document.write("</p>");

//--Part E--
document.write("<p>Series: ");
for (var i = 1; i <= 10; i++) {
    document.write((2 * i) + "k, ");
  }

//-----Question No. 9-----

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem(item) {
  var lowerCaseItem = item.toLowerCase();

  if (A.includes(lowerCaseItem)) {
    alert("Yes, '" + item + "' is found in the list.");
  } else {
    alert("No, '" + item + "' is not found in the list.");
  }
}

var userInput = prompt("Enter the item you want to search:");
searchItem(userInput);


//-----Question No. 10/11-----

var user = prompt("Enter a string:");
var titleCaseString = user.toLowerCase().split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);});
document.write("Input in title case: " + titleCaseString);


//-----Question No. 12-----

var numberValue = +("472");
document.write("Value: " + numberValue + "<br>");
document.write("Type: " + typeof(numberValue));