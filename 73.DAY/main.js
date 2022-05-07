/***
 Day 73: Basic Shell Commands
Shell ->  a program that takes keyboard commands and passes them to the operating system to carry out. examples include, bash, zsh, powershell, CMD, dash and many others.

Terminal ->  a GUI-based program that launches a shell prompt, a program that enables you to enter shell commands.

The anatomy of a shell command:
Most shells have in-built commands, but most commands you will type on a regular basis come as seperate executables, eg npm and yarn commands.
A shell command has these three main components:
Consider the shell command below:
  $ ls -a /home/user/Desktop

  a. Command name -> this just the name of the command, in this   case ls. ls is a command that lists contents of a directory 

  b. Command option[s] -> An option (also referred to as a 	      flag) is a predefined value that changes the behavior of the 	  command. In our case -a is the option. There are two        	 types of options:
    -> short option (-a) 
    -> long option  (--all)

  c. Argument[s] -> Arguments are used to provide additional 	information to the command. This information could be things 	like a filename, user name, or host name. In our case 		    /home/user/Desktop is the argument, which is the directory 	    where ls should list files and directories.

Basic unix commands:
  ls - list contents of a directory 
  cd - change the directory $ cd  ~/Desktop/projects
  pwd - print the current working directory
  mv - move a directory or files
  rm - delete files $ rm index.html
  cp - copy  files $ cp ../index.html ./src
  touch - create a file eg $ touch main.js
  mkdir - create a directory $ mkdir my-website
  cd . - change to current directory - does nothing
  cd .. - change to the parent directory of current directory
 */