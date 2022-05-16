# Module bundlers in the JavaScript ecosystem
As our application grows bigger, we want to split it into multiple files, so called ‘modules’.To manage all these modules we need a tool called  a module bundler to bundle all our code before shipping it to end-user.

## The benefits of using bundlers  are:
1. ### **Modularity** 
   Allow you to break down your source code into parts, or modules, that are easier to work with, especially in a team environment

2. ### **Network performance**
    Network performance is gained by only needing to load one dependency in the browser: **the bundle**

3. ### **Control over module resolution**

    They give more control over how modules are resolved, allowing bare modules and much more, like CSS/HTML modules. 
    
    Bundling all the dependencies into a single file allows you to load everything with one HTTP request, thereby avoiding additional latency.


There are various module bundlers available for JS developers, the most common are:
   - Vite
   - Webpack
   - Rollup
   - Parcel
   - Snowpack
   - and others

## **How module bundlers work** 
I am using webpack in this case

1. ### Take a “main” module, defined as the entry point of our project.

2. ### Analyze its dependencies: imports and then imports of imports to create a dependency graph.

3. ### Build a single file with all modules (or multiple files when using `code splitting`, replacing native import calls with bundler functions, so that it works. 

4. ### In the bundling process other transforms and optimizations may be applied:
   - Minification Removes whitespace, line breaks, lengthy variable names, and unnecessary code to reduce the file size

   - Modern, bleeding-edge JavaScript syntax may be transformed to older one with similar functionality using Babel 

   - Removal of unused exports(Tree shaking)
