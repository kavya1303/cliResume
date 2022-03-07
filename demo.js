const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "list",
      name: "selection",
      choices: ["choice 1", "choice 2"],
    },
  ])
  .then(function (answer) {
    if (answer.selection == "choice1") {
        console.log("you choose the only one")
    }else{
        console.log("you choose whatever!!1111")
    }
  });
