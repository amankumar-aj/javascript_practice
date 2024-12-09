
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