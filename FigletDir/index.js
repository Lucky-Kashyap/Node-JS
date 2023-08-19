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



