
// document.write(`<h1>Hi I am H1</h1>`)

function hello(){
    alert("YOU HAVE BEEN HACKED")
}

// document.write("HI I am javascript")/

// var pi=3.14
// var person="are you good"
// var answer="Yes I am"

// document.write(pi+"<br>");
// document.write(person+"<br>");
// document.write(answer+"<br>");

// function myfunction(){
//     var carname="welcome";
//     document.getElementById("demo").innerHTML=carname;
//}
// var a="aman"
// console.log(a)

// -------------------------------
// var num=10;
// console.log(num);
// console.log(typeof(num));

// num=false;
// console.log(num);
// console.log(typeof(num));

// num=null;
// console.log(num);
// console.log(typeof(num));

// num=undefined;
// console.log(num);
// console.log(typeof(num));

//array-------------------
// var numberarray=[1,2,3];
// var animal = new Array('cat','dog','billi');
// var person={name:"aman",age:14}
// document.write(numberarray+'<br>');
// document.write(animal+ "<br>");
// document.write(person.name);


var person={
    fname:"Aman",
    lname:"Jha",
    id:"031",

    getinfo:function(){
        return this.fname+" "+this.lname +" "+ "ID-"+this.id;
        
    }

};

document.getElementById("demo").innerHTML=person.getinfo();


document.write("new content below"+"<br>")


// var person={
//     fname:"Aman",
//     lname:"Jha",
//     id:"031",
//     branch:'IT'}
//     console.log(person)

//     document.write(person['fname']),
//     console.log(person["fname"])

//     document.write('<br>')

//     document.write(person.id),
//     console.log(person.lname)

// function myfunction(){
//     var carname='velvo';
//     document.getElementById("demo1").innerHTML=typeof carname+" "+carname;

// }
// myfunction();
// document.getElementById("demo2").innerHTML=typeof carname+" "+carname;


// function show(){
//     var a= "a i local outer variable";
//     document.write(a+"<br>")
//     document.write(b+"<br>")
//     function disk(){
//         var b= "b i local outer variable";
//     document.write(b+"<br>")
//     }
//     disk();

// }
// show();

//16-12-24------------------------------------------------------------------------------

// var a=10;
// function functiona(){
//     console.log("start of function A")
//     function functionb(){
//         console.log("start of function b")
        
//     }

//     functionb();

// }
// functiona();

// console.log("global context");

// var name='Aman';
// function first(){
//     var a="Hello";
//     second();
//     console.log(a + " "+ name);


// }
// function second(){
//     var b="Hi";
//     third();
//     console.log(b + " "+ name);
// }
// function third(){
//     var c="Hey";
//     console.log(c + " "+ name);
//     }
//     first();


// var a=5;
// function add(){
//     var b=10;
//     console.log(a+b);

//     function mul(){
//         var c=20;
//         console.log(b*c);
//     }

//     mul();
    

// }
// add();


// var age =prompt("enter ");

// if(age>18){
//     document.write("Eligible to vote");

// }
// else{
//     document.write("Not Eligible to vote");
// }

//  var grade=prompt("Enter grade of student");
//  document.write("Entering in switch case <br>");
//  switch(grade){
//     case 'A': document.write("excellent<br>");
//             break;
//     case 'B': document.write("Good<br>");
//             break;
//     case 'C': document.write("Fair<br>");
//             break;
//     case 'D': document.write("Failed<br>");
//             break;
//     default: document.write("Invalid grade");

//  }

// var i;
// var count=0;
// document.write("Starting loop" +"<br>");
// for(i=0;i<10;count++){
//     document.write("Current count "+ " "+count+"<br>");
//     document.write(i+"<br>");
//     // console.log(i);
//}

//loop for odd even check
// for( var i=0; i<100;i++){
//     if(i%2==0){
//         console.log(i+" is even");
//     }
//     else{
//         console.log(i+" is odd");
//         }
// }



// var myarray= ["A","B","C"];
// for(var i=0;i<myarray.length;i++){
//     console.log(myarray[i]);
// }

function myfunction(){
    alert("Mai ek function ka alert message hoon")
}

function sayhello(name, age){
    console.log(name + " "+ age);
}
sayhello("Aman ",19);


