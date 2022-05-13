<!-- @format -->

# **Scripts defined in your package.json file**
The "scripts" property of your package.json file supports a number of built-in scripts and their preset life cycle events as well as any predefined scripts.

## **Pre and Post scripts**
To create "pre" or "post" scripts for any scripts defined in the "scripts" section of the package.json, simply create another script with a matching name and add "pre" or "post" to the beginning of them.

##  Running user defined scripts
The command is run  as follows
```shell
 $ npm run <pre-userDefined>
 $ npm run <userDefined>
 $ npm run post-userDefined
```

## `User`
When npm is run as root, scripts are always run with the effective uid and gid of the working directory owner.

## Environment
Package scripts run in an environment where many pieces of information are made available regarding the setup of npm and the current state of the process.

- ### Path
  If you depend on modules that define executable scripts, like test suites, then those executables will be added to the PATH for executing the scripts. So, if your package.json has this:


  Day 78: Scripts defined in your package.json file.
The scripts property of your package.json file supports a number of built-in scripts and the preset life cycle events of those scripts as well as any user predefined scripts.

Built-in scripts include:
1. npm start
 $ npm start //If there is a server.js file in the root of your package, then npm will default the start command to 'node server.js', prestart and poststart will be run if available.
 
 "start": "node server.js" //defults to this

2. Other built-in scripts include:
   npm stop, npm restart, npm test, npm install, npm prestart, 	    npm poststart, etc.
   
   
Creating and running custom npm scripts:
1. create  three file greet.js, postgreet.js and pregreet.js

2. Inside the pregreet.js add the following line:
   console.log('Hello there, I am run before greet')

3. Inside the greet.js add the following line:
   console.log('Hello there, I am greet')

4. Inside the postgreet.js 
   console.log('Hello there, I run after greet')

5. Lastly edit you package.json file generated using npm init
 and add the script greet, postgreet and pregreet:
    "scripts": {
    "pregreet": "node ./pregreet.js",
    "greet": "node ./greet.js",
    "postgreet": "node ./postgreet.js"
  }
    
To run the custom script greet:
  $ npm run-script greet
   or
  $ npm run greet
  
NB: You must have Node.js installed for the scripts to execute

After running the above script you should see  in your terminal
/**
Hello there, I am run before greet

Hello there, I am greet

Hello there, I run after greet
*/
 