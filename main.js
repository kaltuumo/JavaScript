// document.write('<h2>Hello Mr/Mss</h2>');
// console.log("Welcome To JavaScrpt");
// alert("Asc Welcome");
// confirm("Are You Ready");
// prompt("Magacaa");
// prompt("imisaa jirtaa");




// let n = 90;
// n+=8;

// var n1 =8;
// console.log(n);
// console.log(n2)
// console.log(n1)
// let n1;
// n1 =1;

// const n2 = 90;

// var n3 = 30;
// n3 +=4;
// console.log("N1 is :",n1);
// console.log("N2 is :",n2);
// console.log("N3 is :",n3);

// alert("Welcome")
// document.write("Welcome Mr/Mss");
// console.log("Welcome To JavaScript")
// confirm("Are U Ready");
// var input_name= prompt("Enter Ur Name");
// let age = prompt("Enter Ur Age");

// console.log("Ur Name is:", input_name);
// console.log("Ur Age is:", age);

//Operators
let x =3;
let = y= 2;
let z= x+y;
// z += x+y;
console.log(z)
//String 
let text1 = "Have a nice";
let text2 = "day";
text1 += text2;
// console.log(text1 + ' +' +text2);
console.log(text1);
//Multiplecation
let n1 = 70;
let n2 =10;
let n3 = 3;
console.log(".... Addition And Multaplication");
console.log(n1*n2+n3);//7003
console.log((n1+n2)*n3);//240
console.log(n1+n2*n3);//100

console.log(".... Addition And Subtraction");
console.log(n1+n2-n3);//77
console.log(n1-n2+n3);//63

console.log(".... Addition And Devision");
console.log(n1+n2/n3); 73.333
console.log(n1/n2+n3); 10
console.log((n1/n2)+n3); 10


console.log(".... Substraction and Multipliaction");
console.log(n1-n2*n3);40 
console.log(n1*n2-n3); 697
console.log((n1-n2)*n3); 180

console.log(".... Substraction and divission");
console.log(n1-n2/n3);// 66.6
console.log(n1/n2-n3);// 4
console.log((n1/n2)-n3); 4

console.log(".... Substraction and adition")
console.log(n1+n2-n3);// 77
console.log(n1-n2+n3);// 63
console.log((n1-n2)+n3);// 63

console.log(".... Multaplication and divission");
console.log(n1*n2/n3);233.3
console.log(n1/n2*n3);// 21
console.log((n1/n2)*n3); 21

console.log("....All");
console.log(n1+n2-n3*n2/n3);70
console.log(n1 + n2/ n3- n2* n3);//43.3

n1=70;
n2= 60;
n3= 4;
n4= 3;

//............Module........  Module (Division Remainder) operator (%) Remainder numbers.
console.log("The Module( Division Remainder) operator (%) Remainder numbers.");
console.log(n1%n2);// Remainder 10;
console.log(n2%n1);// Remainder 60
console.log(n3%n4);// Remainder 1
console.log(n4%n3);// Remainder 3

//.......... Module (Division Remainder and Division);
console.log("Module (Division Remainder and Division)");
console.log(n1%n2/ n3);// Result 2.5
console.log(n1/n2 %n3);// Result 1.16

//.......... Module (Division Remainder and Multaplication);
console.log("Module (Division Remainder and Multaplication)");
console.log(n1 % n2 * n3); // Result 40
console.log(n1 * n2 %n3);// Result 0

//.......... Module (Division Remainder and Addition);
console.log("Module (Division Remainder and Addition)");
console.log(n1 % n2 +n3);// Result 14
console.log(n1 + n2 % n3);// Result 70 
console.log((n1 + n2) % n3)// Result 2

//.......... Module (Division Remainder and Substraction);
console.log("Module (Division Remainder and Substraction)");
console.log(n1 % n2 - n3);// Result 6
console.log(n1 - n2 % n3);// Result 70

console.log("All");
console.log(n1 - n2 + n3 * n4 /n3 %n4);
// 70 - 60 + 12 / 4 % 3;  , Then , 70 - 60 + 3 % 3; , Then, 70 - 60 + 0 = 10;
console.log(n1 - n2 + n3 % n4 /n3 *n4);
// 70 - 60 + 1 / 4 * 3  ,, Then ,, 70 - 60 +0.25 * 3 ,, Then ,,  70 - 60 + 0.75 =  10.75 Result

// ....... Icrement...........
console.log("Increment");
// Increment (pre+increment , Post_Increment)
let num1 = 99;
let num2 = 22;
let num3 = 33;
console.log(num1);
num1++;
// num1+=1;
// num1 = num1+ 1;
console.log(num1);

console.log(num2);
num2+= ++num3;// Pre_increment
// num2 += num3 ++;// post_increment
console.log(num2);
console.log(num3);

// ............. Decerement...........
console.log("Decrement")
let num4 = 89;
let num5 = 101;
console.log(num4);
// num5 += num4;
num5 += --num4;// pre_decrement
// num5 += num4--; //post_decrement
console.log(num5);
console.log(num4);


n1 = 91;
n2 = '91';
//  called Assigned Opertor == ....;

//.........Comparison operator......
/*
   equal to ==       (n1 == n2 ) => true
   equal to equal(Equilty) -(equal value and equal type) ===      (n1 === n2) => false
   not Equal to     !=    (n1 != n2) =>false
   Not Equal value and not equal type !== (n1 !== n2) => false
   greater than   > (n1 > n2) =>  false
   greter than or qual to >= (n1 >= n2) => True
   less then < ( n1 < n2 ) => False
   less than or equal to <= (n1 <=  n2) => true 
*/ 

// Logical Operators
/*
 AND &&  (n1 > 80 && n2 < 100 )  => true // else // (n1 > 80 && n2 < 90 ) =>false ,, if  n1 True and N2 True == True (only one time return true if two variable is true)
 OR ||  (n1 < 100  || n2 > 150 ) => True ,, else ,, (n1 > 100 || n2 < 70) => False(only one time return False if two variable is False)
 NOT !       !(n1 == 90) => false
*/

//  06/10/2022

//  ........Conditional Operators (Conditional Statement)..........
//  if, if else, and if ,else if ,  els, Switch

console.log("Conditional Operator");

let nu1 = 80;
let nu2 = 87;
// ....... Only Use If.......
console.log("if")
if(nu1 == nu2){
    console.log("N1", nu1 , " equal to N2: ",nu2);
}
// if else
console.log("if else")

if(nu1 == nu2){
    console.log("N1", nu1, "Equal to N2", nu2);
}else{
    console.log("N1", nu1, "Not equal to N2", nu2);
}
// if else if
console.log("if else if")

if(nu1 == nu2){
    console.log("N1", nu1, "Equal to N2", nu2);
}else if(nu1 > nu2){
    console.log("N1", nu1, "is greater then N2", nu2);
}else{
    console.log("N1", nu1, "Not equal to N2", nu2);
}

// Repeated if else if
console.log("Repeated if else if");
if(nu1== nu2){
    console.log("N1",nu1, "Equal to N2" , nu2);
}else if(nu1 > nu2){
    console.log("N1",nu1, "is greater then N2" , nu2);
}else if(nu1 <nu2){
    console.log("N1",nu1, "is less than N2" , nu2);
}else{
    console.log("N1",nu1, "Not equal to N2" , nu2);
}


nu1 = 80;
nu2 = 80;
//// ........... Equality..........
console.log("=== (Equality) Equal value and Equal type");

if (nu1 === nu2){
    console.log("N1:" ,nu1, "Equal Value and dataType N2", nu2);
}else{
    console.log("N1:" ,nu1, "Not equal Value and dataType N2", nu2);
}

nu1 = 80;
nu2 = 81;
// not equal to
console.log("not equal to");
if (nu1 != nu2){
    console.log("N1:" ,nu1, "Not Equal to N2", nu2);// Ask Teacher
}else{
    console.log("N1:" ,nu1, "equal to N2", nu2);
}

//  not equal value and not data type
console.log("==not equal value and not data type");
nu1 = 80;
nu2 = '80';

if(n1 != n2){
    console.log("N1", nu1, "equal value and equal dataType N2", nu2);// Ask teacher
}else{
    console.log("N1", nu1, "Not equal value and not equal dataType N2", nu2);
}

// Practise Grade
nu1 = 100;
// nu1 = prompt("Enter Your Garde");
// console.log(nu1);
if(nu1 > 100){
    console.log("Invalid Grade");
}else if (nu1 = 100 ){
    console.log("A+");
}else if (nu1 >= 90){
    console.log("A");
}else if(nu1 >= 85){
    console.log("B+");
}else if(nu1 >= 80){
    console.log("B")
}else if(nu1 >= 75){
    console.log("C+")
}else if(nu1 >= 70){
    console.log("C")
}else if(nu1 <= 65){
    console.log("Go to Re-exam");
}else{
    console.log("Ivalid grade")
}

//.........Logiacl Operator.......
console.log("Logical Operator")
nu1 = 90;
nu2 = 101;
// And &&
console.log(".........And &&......");
if(nu1 > 80 && nu2 < 109){
    console.log("N1 && N2 True");
}else{
    console.log("N1 && N2 False");
}
// OR ||
console.log("...........OR || .........");
if(nu1 > 100 || nu2 <100){
    console.log("N1 || N2 True");
}else{
    console.log("N1 || N2 False");
}
// ........ Typeof............

nu1 = 80;
nu2 = "jamal";
num1 = false;

let obj = {
    Name : "qadar",
    age : 23,
    phone: '65626262'
}

console.log(typeof nu1);
console.log(typeof nu2);
console.log(typeof num1);
console.log(typeof obj);

///// ........... Grade And 

let grade = 100;
// grade = prompt("Enter You Grade");
if(grade >=100 && grade >=95){
    console.log("A+");
}else if(grade >=90 || grade >=85){
    console.log("A");
}else if(grade >=80 && grade >=75){
    console.log("B+");
}else if(grade >= 70 || grade >= 65){
    console.log("C+");
}else if(grade >= 65 && grade >=50){
    console.log("C-");
}else if(grade <=49){
    console.log("Go to Re-exam");
}else{
    console.log("Invalid Grade");
}
// .......... Switch.....
console.log("Switch");
// day = new date.getDate();
day = new Date().getDay();
console.log(day);
switch(day ) {
    case 0:
        console.log("Axad");
        break;
    case 1:
        log("Isniin");
        break;
    case 2 :
        console.log("Talaada");
        break;
    case 3:
        console.log("Arbaco");
        break;
    case 4 :
        console.log("Khamiis");
        break;
    case 5 :
        console.log("Jimco");
        break;
    case 6 :
        console.log("Sabti");
        break;
    default:
        console.log("Invalid Day");
        break;
}

//Loop Of JavaScript (for, while, do while);

//for loop(start; condition; driver); (tatement1, statement2, statement3);

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)

// .... Three Initialize For loop.......
console.log("For Loop Increment");
console.log("For loop Way One");

for(let i = 0; i<= 20; i++){
    console.log("The number is: " ,i);
}

console.log("For Loop Way Two");
let i = 0;
for(; i <=20; i++){
    console.log("The number is: " ,i)
}
console.log("For Loop Way Three"); 
let j;
for(j = 0; j<=20; j++){
    console.log("The number is: " ,j);
}
console.log("For Loop Decrement");

for(let n = 20; n>=0; n--){
    console.log("The number is: " ,n);
}

console.log("Even Number");
for(let j = 20; j>=0; j-=2){
   console.log("The number is: " ,j);
}
console.log("Onother Way");
for(let n = 19; n>=0; n-=2){
    console.log("The number is: " ,n);
}

console.log("For loop Way Four");

let f=0;
for(; f<=10;){
    console.log("The Number is: " ,f);
    f++
}

console.log(".....Dec....");
let d = 10;
for(; d >=0 ;){
    console.log("The Number is: " ,d);
    d--;
}

console.log("While Loop");
 
let w = 0;
while(w <= 10){
    console.log("The Number is: " ,w);
    w++;
}

console.log("..........Dec....");

let m = 10;
while(m >=0){
    console.log("The Number is: " ,m);
    m--;
}

console.log("........Do While");

let r=0;
do{
    console.log("The number is: " ,r);
    r++;
}while(r <=10);

console.log(".........Dec");

let k =10;
do{
    console.log("The number is: " ,k);
    k--;
}while(k >=0);

//............ Assigment.......
// ...............Array...............

console.log("......Array..........");

let names = ["Amiira", "Farhia", "Omar", "Hassan", "Safa"];
console.log(names);


//.........for loop......

console.log(".......for loop array.....");

for(let a = 0; a <names.length; a++){
    console.log("name array is : ", names[a]);
}


console.log("......Dec For loop array........");

for(let z = names.length-1; z >= 0; z--){
    console.log("name array is : ", names[z]);
}

 // .......... while loop........

 console.log("..........While loop array..........");

 let b = 0;
 while(b < names.length){
    console.log("name array is:", names[b]);
    b++;
 }

 console.log(".......Dec While loop Array.............");

 let s = names.length-1;
 while(s >=0){
    console.log("name array is:", names[s]);
    s--;
 }

 //......... do while..........
console.log("..........Do wile loop array..........");
 let c = 0;
 do{
    console.log("name array is:", names[c]);
    c++;
 }while(c < names.length);
 
 console.log("......... Dec Do while Array............");

 let l = names.length-1;
 do{
    console.log("name array is:", names[l]);
    l--;
 }while(l >= 0);

 //...............................
 // JavaScript Array  is a special variable, which can hold more than one value:
 console.log("..... Arrays")
 var nammes = ["Hassan", "Hamdi", "Aisha", "Ahmed"];
// var nammes = Array();
 console.log('',nammes[0], '\n', nammes[1],'\n', nammes[2],'\n', nammes[3],'\n')

 for(let a = 0; a<nammes.length; a++){
    console.log("the names is : ",nammes[a]);
 }
console.log("..................");
 for(ar  = names.length-1; ar>=0; ar--){
    console.log("the names is:",nammes[ar]);
 }
//  console.log(nammes);



 
