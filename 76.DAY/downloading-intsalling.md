<!-- @format -->

# Searching for and getting packages from the Registry

After creating a package.json file using

```shell
$ npm init -y
```

Installing a will create the **node_modules** directory in your current
directory (if one doesn't exist yet) and will download the package to that
directory. Make sure to add a .gitignore file, you can get one here
[node .gitignore file](https://github.com/github/gitignore/blob/main/Node.gitignore)
and add to your root directory.

## Downloading and installing packages locally

In this example we are going to install semver package, to search for a package
visit [npmjs.com](https://www.npmjs.com) or visit [npmio](https://www.npm.io),
enter the package name and search it. Unscoped packages are always public, which
means they can be searched for, downloaded, and installed by anyone. To install
a public package, on the command line, run

-   You can also search from using the CLI tool

    ```shelll
    $ npm search semver
    ```

### Installing an unscoped package

```shell
 $ npm install semver
```

Pass the @latest to install the newest version on the registry

```shell
$ npm install semver@latest
```

You can also install a specific version of a package First view information
about the package on the website or using the CLI To view from the CLI

```shell
$ npm view semver
```

To install using version name

```shell
$ npm install semver@7.3.7
```

### Installed a scoped public package

Installing a scoped public package, @faker-js/faker an alternative to faker.

```shell
$ npm install @faker-js/faker
```

## Specifying dependencies and devDependencies in a package.json file

To specify the packages your project depends on, you must list them as
"dependencies" or "devDependencies" in your package's package.json file.

-   #### Dependencies
    Packages required by your application in production. To install a a package
    as dependency, just run `npm install <package-name> or provide
    **--save-prod** flag, by default npm install a package for production.

```shell
npm install semver [--save-prod]
```

-   #### devDependencies
    Packages that are only needed for local development and testing. This
    include packages search as Testing frameworks(eg jest and mocha), tailwind,
    postcss

To install a devDependency pass **--save-dev** flag or -D for the short option.

To install a devDependency such as postcss run

```shell
$ npm install postcss --save-dev
```
