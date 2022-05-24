<!-- @format -->

# Getting started in Webpack

Webpack is used to compile JavaScript modules. Once installed, you can interact
with webpack either from its CLI or API

## Loading a package script before the the main script

-   May result in errors
-   It is not immediately apparent that the script depends on an external
    library.
-   If a dependency is missing, or included in the wrong order, the application
    will not function properly.
-   If a dependency is included but not used, the browser will be forced to
    download unnecessary code.

## Defining explicitly that we require the lodash package

By stating what dependencies a module needs, webpack can use this information to
build a dependency graph. It then uses the graph to generate an optimized bundle
where scripts will be executed in the correct order.

## To use Webpack without configuring the scripts

Execute webpack to bundle the module from an entry file. Looks into the
./src/index.js and outputs into ./dist/main.js

```shell
npx webpack
```
