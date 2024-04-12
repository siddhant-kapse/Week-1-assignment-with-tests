const fs = require("fs");

function callback(err, data){
    console.log(data);
}

var counter = 0;

fs.readFile("a.txt", "utf-8", callback)


// fs.readFile("a.txt", "utf-8", function(err,data){
//    console.log(data)
//  })

// fs.readFile("a.txt", "utf-8", (err, data) => {
//     console.log(data);
// });
  

