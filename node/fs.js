//file system moldul
//reading files , writing files

const fs=require("fs");

fs.readFile(("demo.txt"), 'utf-8' (err,data)=>{

    if (err){
        throw err.name;
    }
    else{
        console.log(data);
    }
})

