const path = require("path");
const os = require("os");
const process = require("process");

// 1. Print out the current working directory
const cwd = path.resolve();
console.log(cwd);

// 2. Print out the separator of a given file path
const separator = path.sep;
console.log(separator);

// 3. Print out the extension name of a file path
const extName = path.extname(
  "C:UsersOneDriveDesktopNode js assignmentpackage.json"
);
console.log(extName);

// 4.Print out the process id of the current running process
const pid = process.pid;
console.log(pid);

// 5. Print out the user information of the os
const user = os.userInfo();
console.log(user);

// 6. Print out the platform of an operating system
const platform = os.platform();
console.log(platform);
