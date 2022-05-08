/**
 * Day 73: Basic Shell Commands
 * Shell ->  a program that takes keyboard commands and passes them to the operating system to carry out. examples include, bash, zsh, powershell, CMD, dash and many others.
 *
 * Terminal ->  a GUI-based program that launches a shell prompt, a program that enables you to enter shell commands.
 *
 * The anatomy of a shell command:
 * Most shells have in-built commands, but most commands you will type on a regular basis come as seperate executables, eg npm and yarn commands.
 * A shell command has these three main components:
 * Consider the shell command below:
 *   $ ls -a /home/user/Desktop
 *
 *   a. Command name -> this just the name of the command, in this   case ls. ls is a command that lists contents of a directory
 *
 *   b. Command option[s] -> An option (also referred to as a 	      flag) is a predefined value that changes the behavior of the 	  command. In our case -a is the option. There are two        	 types of options:
 *     -> short option (-a)
 *     -> long option  (--all)
 *
 *   c. Argument[s] -> Arguments are used to provide additional 	information to the command. This information could be things 	like a filename, user name, or host name. In our case 		    /home/user/Desktop is the argument, which is the directory 	    where ls should list files and directories.
 *
 * Basic unix commands:
 *   ls - list contents of a directory
 *   cd - change the directory $ cd  ~/Desktop/projects
 *   pwd - print the current working directory
 *   mv - move a directory or files
 *   rm - delete files $ rm index.html
 *   cp - copy  files $ cp ../index.html ./src
 *   touch - create a file eg $ touch main.js
 *   mkdir - create a directory $ mkdir my-website
 *   cd . - change to current directory - does nothing
 *   cd .. - change to the parent directory of current directory
 *
 * @format
 */

/***
 * Package manager in JavaScript
 */

/***
   A package manager is a collection of software tools that automates the process of installing, upgrading, configuring and removing computer programs for a computer in a consistent manner. The most famous package manager for JavaScript and NodeJS is npm maintained my npm inc company.
   npm consist of three basic components:
    -> The website(npmjs.com) - Use the website to discover packages, set up profiles, and manage other aspects of your npm experience
    -> The command-line Interface tool(npm) - a software for interacting with the registry via terminal. The most common CLI tools are npm , yarn and pnpm.
    -> npm registry - is a large public database of JavaScript software and the metadata information about packages.

    What is package ->  is a file or directory that is described by a package.json file. A package must contain a package.json file in order to be published to the npm registry. Packages can be public or private.


 */

/***
     * Day 74: Package Managers in JavaScript
A package manager is a collection of software tools that automates the process of installing, upgrading, configuring and removing computer programs for a computer in a consistent manner. The most famous package manager for JavaScript and NodeJS is npm, maintained my npm inc company.

npm
npm consist of three basic components:
 a. Website(npmjs.com) -> Use the website to discover 		  packages, set up profiles, and manage other aspects of your  npm experience.

 b. npm software registry -> is a large public database of  JavaScript software and the metadata information about  packages.
 
 c. npm command-line interface (CLI) tool - a software for  interacting with the registry via the terminal. Other  unofficial CLI tools are yarn, and pnpm.
 
 
What is a package
A package is a file or directory that is described by a package.json file. A package must contain a package.json file in order to be published to the npm registry. Packages can be public or private(paid for).

 
Downloading and installing Nodejs and npm
To publish, install and manage packages to and from the public npm registry or a private npm registry, you must install Node.js and the npm or yarn or pnpm command line interface tools.

  a. Installing Node.js
  Visit the official nodeJS website(nodejs.org) and install     NodeJS on your OS, it is available for Windows, MacOS and     Linux. It is recommended to install NodeJS and npm using     node Version managers such as nvm(available at github).
    //Use nvm on POSIX-compliant sytem Linux, BSD and MacOS
    //https://github.com/nvm-sh/nvm
    $ nvm install node  //install the latest(LTS)
    
    //install specific node version
    $ nvm install 14.0.0 // or 18.1.0(current)

    //to use a specifc nodeVersion from a shell
    $ nvm use 16.15.0
    
  
  b. Installing npm, yarn or pnmp
  npm is installed when you install NodeJS
  To install latest version of npm update your NodeJS version
  or: 
    //install using nvm
     $ nvm install-latest-npm

    //install npm
    $ npm install -g npm
    
 To confirm you have Node.js and npm properly installed:
   //open your terminal and from the shell prompt

   //confirm the version of node installed
   $ node --version // eg v16.15.0

   //confirm the version of npm install
   $ npm --version //eg 8.9.0 depending on your npm version
     */
