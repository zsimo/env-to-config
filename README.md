# env-to-config

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/zsimo/env-to-config.svg?branch=master)](https://travis-ci.org/zsimo/env-to-config)
[![codecov](https://codecov.io/gh/zsimo/env-to-config/branch/master/graph/badge.svg)](https://codecov.io/gh/zsimo/env-to-config)

 
"env-to-config" is a function that read the .env file and returns a `frozen` object.
The main purpose is to provide a ready to use config object, with all needed env keys, without directly check for the existence of those keys in the process.env object.  
Inspired by Laravel config directory (yes, the Php framework).  
It uses [dotenv](https://github.com/motdotla/dotenv).


## Install

```bash
# with npm
npm install env-to-config

# or with yarn
yarn add env-to-config
```

## Usage

```js
// config.js file
var envToConfig = require("env-to-config");
var config = envToConfig({
    mandatory_keys: [
        "REDIS_HOST",
        "REDIS_PORT"
    ],
    default_values: [{
        key: "APP_ENV",
        value: "production"
    }]
});

module.exports = config;
```
```js
// index.js file
var config = require("config.js");

// just use the config keys
// no need to check if a key exists: if it's not there, an exception is thrown 
console.log(config.APP_ENV); // production
```

## Options
Accepts an options object as a parameter with 3 possible keys:
#### path `type string`
Default: `path.resolve(process.cwd(), '.env')`  
You may specify a custom path if your file containing environment variables is located elsewhere.
```js
var envToConfig = require("env-to-config");
var config = envToConfig({
    path: "/absolute/path/to/env/file"
});
module.exports = config;
```
#### mandatory_keys `type array`
Default: `[]`  
A list of mandatory keys. It `throws an error` in case of a missing mandatory key.
```js
var envToConfig = require("env-to-config");
var config = envToConfig({
    mandatory_keys: [
        "DB_HOST",
        "DB_USERNAME",
        "DB_PASSWORD",
        "DB_DATABASE"
    ]
});
module.exports = config;
```
#### default_values `type array`
Default: `[]`  
A list of objects with the 2 keys `key` and `value`.
```js
var envToConfig = require("env-to-config");
var config = envToConfig({
    default_values: [{
        key: "APP_ENV",
        value: "production"
    }]
});
module.exports = config;
```