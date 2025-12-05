// // var a=10;
// console.log(a);
// //global scope variable
// // let b=20;
// console.log(b);
// //block scope variable
// // const c=30;
// console.log(c); 
// //constant variable

// //Function
// //Named Function
// function namedfunc(){
//     console.log("named function");
//     console.log("function called");
//     console.log("function executed");
// }
// //Function Call/Invocation
// namedfunc();

// //Function Expression
// var funcExp=function(){
//     console.log("Function expression");
//     console.log("Function expression called");
//     console.log("Function expression executed");
// }
// funcExp();

// //Arrow Function
// var arrowFunc=()=>{
//     console.log("Arrow Function");
//     console.log("Arrow Function called");   
//     console.log("Arrow Function executed");
// }
// arrowFunc();

// //Callback Function and IIFE(Immediately Invoked Function Expression)
// (()=>{
//     console.log("IIFE");
//     console.log("IIFE called");
//     console.log("IIFE executed");
// }
// )();
// const addTwonumbers=(p1,p2)=>{
//     let num1=p1 || 10;
//     let num2=p2 || 20;
//     let sum=num1+num2;
//     console.log(`Sum of two numbers: ${sum}`,sum);
// };
// addTwonumbers(50,70);
// addTwonumbers(40,50);
// addTwonumbers();

//add TwoNumbers
// let a=10;
// let b="2";    
// console.log(a/b);
// console.log(2 === "2");

// let c= [1,2,3,"ass"];
// let d=[1,2,3,"ass"];
// console.log(c[0]===d[0]);
// //for loop
// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]+1;
// }
// console.log(arr);
// //for each
// arr.forEach((element,index)=>{
//     console.log(element,index);
// });
// //array map
// let newArr=arr.map((element,index)=>{
//      console.log(element,index);
// });
// let arr2=[6,7,8,9,10];
// // let aa=arr.map((element,index)=>{
// //     return element+index;
// // });
// let aa = arr2.map((element,index)=>element+index);
// {
//     console.log(arr2);
//     console.log(aa);
// };


// // question 1:
// function createArr(a, b, c) {
//   a= [a, b, c];
//   return a;
// }
// console.log(createArr(1, "Akshay", true));

// // question 2:
// function Onlystring(...args) {
//  b= args.filter(element => typeof element === "string");
//  return b;
// }
// console.log(Onlystring(10, "hello", true, "js", 55));
// // question 3:
// function square(...args) {
//   return args.map(element => element * element);
// }
// console.log(square(1, 2, 3, 4, 5));
// // question 4:
// function arrayeve(...args) {
//      let result= args.filter(elements => elements%2 === 0);
//      return result;
// }
// console.log(arrayeve(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// // question 5:
// function names(...args) {
//   let name= args.map(element => element.toUpperCase());
//   return name;
// }
// console.log(names("akshay", "Dev", "Aadhi"));

// // question 6:
// function tnames(name,age,city){
//     let res= [{name,age,city}];
//     return res;
// }
// console.log(tnames("Akshay",18,"DPM"));
// // question 7:
// function addTen(...args) {
//  Add= args.filter(element => typeof element === "numbers" ).map(elements => elements+10);
//  return Add;
// }
// console.log(addTen(5, "abc", 20, true, 50));
// // question 8:
// function createFruitArray(...args) {
//   if (args.length === 0) {
//     return ["apple", "banana"];
//   }
//   return args;
// }
// console.log(createFruitArray()); 
// console.log(createFruitArray("mango", "kiwi"));  

// let a=[1,2,3,4,5,6,7,8,9];
// //filter:truthy value
// let b=a.filter((element,index) => {
//     return index > 4;
// });
// console.log(b);

// //reduce : 
// let c=a.reduce((acc,element,index) => {
//     console.log(acc,element);
//     return acc+element;
// });
// console.log(b); 

let arr = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
];

let b = arr.map((name) => {
    return name.username;
});



let c = arr.filter((el) => {
    return el.id%2 === 0;
}).map((el) => el.name).join(", ");
console.log(c);