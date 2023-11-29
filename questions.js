import inquirer from "inquirer";
class foo {
  async doSomething(dataObj) {
    // some stuffs
    console.log("doSomething");
    const getRelease = await inquirer.prompt([
      {
        type: "list",
        name: "releaseToPublish",
        message: "What release files do you want to publish?",
        choices: ["DEC_23", "FEB_24"],
      },
    ]);
    dataObj = { ...dataObj, ...getRelease };
    return dataObj;
  }

  doAnotherThing() {
    // do something else
    console.log(doAnotherThing);
  }
}

export const { doSomething, doAnotherThing } = new foo();
