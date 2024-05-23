# Node JS Learning

## File System Module

- write file

      const fs = require("fs");

      fs.writeFile('abcd.txt','hey hello',(err)=>{
        if(err) console.log(err);
        else console.log('file created');
      })

- Read file

      fs.readFile("abcd2.txt", "utf8", function (err, data) {
        if (err) console.log(err);
        else console.log(data);
      });

- Update file
- copy file
