const fs = require("fs");

var data = "My edit in the file"

fs.writeFile("a.txt", data, (err)=>{
    if(err){
        console.log("error")
    }else{
        console.log("File written successfully")
    }
})

fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log(data);
});