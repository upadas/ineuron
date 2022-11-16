const fs=require('fs');
const path=require('path');

fs.writeFile(path.join('demowrite.txt'), 'demo write file-1', (err)=>{
    console.log('File writing successful')
    if (err){
        throw err.name;
    }
}

)

// console.log(__dirname);
// console.log(__filename);
