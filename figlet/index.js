const figlet = require("figlet");

figlet("Ashu Yadav!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});