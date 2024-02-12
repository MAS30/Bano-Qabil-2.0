//-----------------------------Assignment No. 2-----------------------------//

//Question No. 1
var a = 5;
console.log("Result: ");
console.log("The Value of a is: " + a);
console.log("..........................")
console.log("The Value of ++a is: " + (++a));
console.log("Now the Value of a is: " + a);
console.log(" ");
console.log("The Value of a++ is: " + (a++));
console.log("Now the Value of a is: " + a);
console.log(" ");
console.log("The Value of --a is: " + (--a));
console.log("Now the Value of a is: " + a);
console.log(" ");
console.log("The Value of a-- is: " + (a--));
console.log("Now the Value of a is: " + a);

//Question No. 2
var a = 2;
var b = 1;
var result = --a ; 
console.log("The Value of --a at this stage is : " + a);
var sub = --a - --b ;
console.log("The Value of --a - --b at this stage is = "+ sub);
var add1= --b + ++b ;
console.log("The Value of --b + ++b at this stage is : " + add1);
var add2 = ++b + b--;
console.log("The Value of ++b + b-- at this stage is : " + add2);
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log("The Final result is " + result);

//Question No. 3
var userName = prompt("Enter your name:");
console.log("Hello, " + userName + "! Welcome to our website.");

//Question No. 4
var num = +prompt("Enter a number for table");

if (num != 0){
    for (var i=1 ; i<=10 ;i++){
        console.log(num +" x " + i + " = " + num * i);
    }  
}
else if (num == 0) {
    var a = 5;
    for (var i=1 ; i<=10 ;i++){
        console.log(a +" x " + i + " = " + a * i);
    }  
}

//Question No. 5
//a
var subj1 = prompt("Enter Name of Subject 1 : ");
var subj2 = prompt("Enter Name of Subject 2 : ");
var subj3 = prompt("Enter Name of Subject 3 : ");
//b
var total = 100;
//c
var marks1 = +prompt("Enter subject 1 marks : ");
//d
var marks2 = +prompt("Enter subject 2 marks : ");
var marks3 = +prompt("Enter subject 3 marks : ");

//e
var totalMarks = marks1 + marks2 + marks3;
var totalSub = 3;
var percentage = (totalMarks / (total * totalSub)) * 100;
var resultMessage =(
  "Subject\t\tTotal Marks\tObtained Marks\n" +
  subj1 + "\t         " + total + "\t      " + marks1 + "\n" +
  subj2 + "\t         " + total + "\t       " + marks2 + "\n" +
  subj3 + "\t         " + total + "\t        " + marks3 + "\n" +
  "Total\t\t     " + totalMarks + "\n" +
  "Percentage\t\t   " + percentage + "%");
alert(resultMessage);
console.log(resultMessage);
