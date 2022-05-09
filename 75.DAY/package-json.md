# Day 75: npm's package.json file
Package.json -> a file in JSON format that contains metadata about an npm package.
  
## **npm init command**
 - synopsis
```shell
 $ npm init [<@scope>/]<name> (same as `npx [<@scope>/}create-<name>`)
```


- Creates a package.json file in the root of the current directory.

### **Using npm init initilaizer**
 This command sets up a new or existing npm package.
```shell
    $ npm init <initializer>  
```

    In this case  the <initializer> is  an npm package named create-initializer, which will be  installed by npm-exec, and then have its main bin executed -- presumably creating or updating package.json and running any other  initialization-related operations.

 - We normally Bootstrap a React project using:

    ```shell 
   $ npx create-react-app my-app
   ```


 The above is the same as
 ```shell
$ npm init react-app my-app
 ```
**react-app** is the initializer which creates  a new react project with a package.json file and install dependencies*/

Using yarn it would be
```shell
$ yarn create react-app my-app
```

### What if you run npm init without initializer
If the initializer is omitted while calling `npm init`, it will ask you a bunch of questions(eg name, version keywords) and then create a package.json file for you.

- navigate to the project where you want to create an npm package
```shell
 $ npm init 
 ```
- using yarn the above would be
```shell
 $ yarn init
```

 You can skip the questions by providing a --yes flag to the command.
 ```shell
 $ npm init --yes
 ```
 - you can also use yarn by providing the same flag
 ```shell
 $ yarn init --yes
 ```
                   