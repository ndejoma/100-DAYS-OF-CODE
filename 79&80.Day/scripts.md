<!-- @format -->

## **`bin` directory in node_modules directory and the bin property in package.json**

First install tailwindcss package locally in your project
```shell
npm init -y 

npm i tailwindcss --save-dev
```

### `bin directory`
A lot of packages have one or more executable files that they'd like to install into the `PATH`.

The bin property is available in a package which provides executables. Tailwindcss package provides these two executables which are copied to the node_modules/.bin directory as `tailwind` and `tailwindcss` executables when you install `tailwindcss` package locally.

```json
  "bin": {
    "tailwind": "lib/cli.js",
    "tailwindcss": "lib/cli.js"
  },
```
### `Executables`
When in global mode, executables are linked into {prefix}/bin on Unix, or directly into {prefix} on Windows.

When in local mode, executables are linked into `./node_modules/.bin` so that they can be made available to scripts run through npm.

## Executing packages binaries locally
- **Using npm exec**
Since the tailwindcss package was installed locally, we can execute the two binaries found in the node_modules/.bin folder

   Creating a tailwind.config.js file in the root of current directory.
   ```shell
  npm exec tailwindcss init
  ```
- Another way would be to create custom scripts in the package.json file your project directory, and configure the scripts to be run by `npm run <script>` or `npm run-script <script>`

Inside your package.json create the name of the init command you will run with npm run command
```json
 "scripts": {
   "init": "tailwindcss init"
  },
```

To run the init command, which initializes the tailwind.config.js file in your project directory

```shell
npm  run init
```
 

 NB: File(s) referenced in bin starts with `#!/usr/bin/env node`, otherwise the scripts are started without the node executable!.

 The `shebang #!` is only understood by POSIX compliant system and not Windows, that's another reason you should never commit node_modules folder to source control. npm creates different executables in Windows and Unix-like Operating systems.

