

// console.log(process.console);

// console.log(process.argv);

// let agrs = process.argv;


// for(let i=0;i<agrs.length;i++){
//     console.log('Hello & Welcome to : ',agrs[i]);
// }


// const someValue = require('./math');



// console.log(someValue);


// console.log(someValue.PI);
// console.log(someValue.sum(3,4));
// console.log(someValue.mul(11,3));





// const req = require('./fruits/apple')

// console.log(req);



// const req = require('./fruits/index');

// const req = require('./fruits');


// console.log(req);

// console.log(req[0]);


// for(let i=0;i<req.length;i++){
//     console.log(req[i]);
// }




const figlet = require('figlet');


const lucky = 'Lucky Kashyap';



figlet(lucky, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });



