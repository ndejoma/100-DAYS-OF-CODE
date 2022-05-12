<!-- @format -->

# Semantic Versioning

Following semantic versioning helps other developers understand the extent of changes in a given package version

//How a package is denoted as 
   MAJOR.MINOR.PATCH-pre-release
   1.2.7-beta.3 Where 1 is the Major version number, 2 is the 	 minor version, 7 is the patch version and beta.3 is the      	 pre-release label.
       

To help developers who rely on your code, npm recommend starting your package version at 1.0.0 and incrementing as follows:

1. Increment the **MAJOR version** when you make Changes that `break backward compatibility`.
    - If the current version of the package is at `1.2.7`, increment the first digit(1 in this case) and reset the middle and last digits to zero to become `2.0.0`.

2. Increment the **MINOR version** when you `add features in a backwards compatible manner`:
    - If the current version of a package is 1.2.7, increment the second digit and reset the last to zero to become 1.3.0

3. Increment the **PATCH version** when you make backwards compatible bug fixes. 
    - If the current version of a package is 1.2.7, increment the last digit to become 1.2.8

4. Additional labels are also available for **pre-release versions** of the package, when the package is in development
    - A package in beta release may be denoted as 2.0.0-beta.1 and 2.0.0-beta.7 is a newer of the beta versions.


You can specify which update types your package can accept from dependencies in your package's package.json file.
```javascript
    "dependencies": {
      "moment": "2.29.3",
      "semver": "^7.3.7"
    },
    "devDependencies": {
      "postcss": "~8.4.0"
    }
```

**Semver**

The caret sign ^ specifies we only accept minor versions. In our case, if 2.30.5 is available it will be installed, but 3.0.0 and above will not be installed.

**Moment package**

We will use the exact version of moment package 2.29.3 that is available through npm. Minor, major and pathc version are not accepted. Only the exact version.

**postCSS package**

 The tilde sign ~ specifies that we only accept patch versions. In our case postCSS package 8.4.13 will be installed but a 8.5.0 will not be installed.