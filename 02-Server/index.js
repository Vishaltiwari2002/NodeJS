const http= require("http");
const fs = require("fs");

const myServer = http.createServer((req , res)=>{
    const log = `${Date.now()}:${req.url} new Req received\n`;
    fs.appendFile("log.txt", log, (err, data)=>{
        switch(req.url){
            case'/':res.end("HomePage");
            break;
            case'/about':res.end("I am Vishal Tiwari...");
            break;
            default:res.end("404 Not Found")
        }   
    })

    // console.log("New Req Received");
    // console.log(req);
  
});

myServer.listen(8000,()=> console.log("Server Start"));
