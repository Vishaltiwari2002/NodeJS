// 1- convert object to json 
// 2 - dusri file me add krna 
// 3- readFile 
// 4- again convert back to js object to origin
// 5- console.log;



const fs = require("fs");
const bioData = {
    name:"Vishal",
    age: 23,
    batch:2024,
}

const jsonData = JSON.stringify(bioData);
console.log(bioData);

fs.writeFile('json1.json',jsonData, (err) =>{
    console.log("Done");
});

fs.readFile("json1.json","utf-8",(err,Data)=>{
    console.log(bioData);
    const orgData = JSON.parse(jsonData);
    console.log(orgData);
});