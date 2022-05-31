# Configuring babel for your project
Babel - is a toolchain for transforming your ES2015+code to backwards compatible version of JavaScript that older browsers or environment can understand.

Babel can be used in:
 - Transform newer syntax into an older syntax
 - Polyfill features in the target environment
 - Code transformation(code modes) 
 - React JSX transformation
 - Many other languages


## How to use babel
1. Install the necessary packages

    ```shell
    yarn add --dev @babel/core @babel/cli @babel/preset-env
    ```
2. Create a config file `babel.config.json` in the root of your project directory.


