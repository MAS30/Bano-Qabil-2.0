//Q1. Greet Visitor with Alert:

window.alert("Welcome to Our Website");

//Q2.  Display Error Message on Page:

document.write("<p class='error-message'>Error! Please Enter a valid password</p>");

//Q3.  Display Message on Page with Line Break:

document.write("This is a message.<br>It breaks two lines using br.");

//Q4. Display Messages in Sequence (3 Alerts):

alert("First Message");
alert("Second Message");
alert("Third Message");

//Q7. Declare a Variable called username:

var username;

//Q8. Declare myName Variable with Full Name:

var myName = "Muhammad Affan Siddiqui";

//Q9. Display "Hello World" in Alert Box:

var message = "Hello World";
alert(message);

//Q10. Save Student's Bio Data in Variables and Show in Alert Boxes:

var studentName = "Affan Siddiqui";
var age = 20;
var grade = "A+";

alert("Student Name: " + studentName);
alert("Age: " + age);
alert("Grade: " + grade);

//Q11. Declare email Variable and Display in Alert:

var email = "affansiddiqui31@gmail.com";
alert("My email address is: " + email);

//Q12. Display Message in Browser Through JS:

document.write("This message is displayed using JavaScript.");

//Q13. Store and Display Special String:

var specialString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(specialString);

//Q14. Declare age Variable and Display in Alert:

var age = 25;
alert("Your age is: " + age);

//Q15. Track Visitor's Number of Visits:

var visitCount = 1;
alert("You have visited this site " + visitCount + " times.");

//Q16. Declare birthYear Variable and Show Message in Browser:

var birthYear = 2004;
document.write("My birth year is " + birthYear + ".");

//Q17. Store Visitor Information and Display Message:

var visitorName = "Affan Siddiqui";
var productTitle = "T-shirt";
var quantity = 5;

alert(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");

//Q18. Declare 3 Variables in One Statement:

var var1, var2, var3;

//Q19. Declare 5 Legal & 5 Illegal Variable Names:


var legalVar1, legalVar2, _legalVar3, $legalVar4, legalVar5;
// var 1illegalVar, #illegalVar, 3illegalVar, illegal-Var, illegal Var

//Q20. Display Rules for Naming JS Variables:

document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name or name</p>");
document.write("<p>Variable names are case-sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>");

//Q21. Program to Add Two Numbers:

var num1 = 5;
var num2 = 10;
var result = num1 + num2;
document.write("The result of adding " + num1 + " and " + num2 + " is: " + result);

//Q22. Repeat for Subtraction, Multiplication, Division & Modulus:

var num1 = 15;
var num2 = 5;

var addResult = num1 + num2;
var subResult = num1 - num2;
var mulResult = num1 * num2;
var divResult = num1 / num2;
var modResult = num1 % num2;

document.write("Addition: " + addResult + "<br>");
document.write("Subtraction: " + subResult + "<br>");
document.write("Multiplication: " + mulResult + "<br>");
document.write("Division: " + divResult + "<br>");
document.write("Modulus: " + modResult + "<br>");

//Q23. JS Mathematical Expressions:

var someVariable;
document.write("Value after variable declaration is: " + someVariable + "<br>");

someVariable = 5;
document.write("Initial value: " + someVariable + "<br>");

someVariable++;
document.write("Value after increment is: " + someVariable + "<br>");

someVariable += 7;
document.write("Value after addition is: " + someVariable + "<br>");

someVariable--;
document.write("Value after decrement is: " + someVariable + "<br>");

document.write("The remainder after dividing the variable's value by 3 is: " + someVariable % 3 + "<br>");

//Q24. Cost of Movie Tickets:

var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;

document.write("The cost of buying " + numberOfTickets + " tickets is: " + totalCost + " PKR");

//Q25. Display Multiplication Table:

var multiplier = 5;
document.write("<h2>Multiplication Table for " + multiplier + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(multiplier + " x " + i + " = " + (multiplier * i) + "<br>");
}
