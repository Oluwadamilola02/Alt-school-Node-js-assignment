const fs = require("fs");
const path = require("path");

// 2.In the Students directory, create a file named user.js

// Writing a file asynchronously
const textFilePath = path.join(__dirname, "Students", "user.js");

// 4. Add your name as content to the file user.js
const content = "Oluwadamilola Adeyoyin";

// File gets created in the file system because it does not exist yet
fs.writeFile(textFilePath, content, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File written successfully");
});

// 5. Update the file and add your age, sex, nationality, phone number and any other information about yourself
fs.appendFile(
  textFilePath,
  "\nAge = 17  Sex = Male, Nationality = Nigerian, Phone number = 08151246226",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Addition to file success!");
  }
);

//  6. Update the file user.js to {your_name}.js eg daniel_adesoji.js
