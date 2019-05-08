# env-to-config

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/zsimo/env-to-config.svg?branch=master)](https://travis-ci.org/zsimo/env-to-config)
[![codecov](https://codecov.io/gh/zsimo/env-to-config/branch/master/graph/badge.svg)](https://codecov.io/gh/zsimo/env-to-config)


Read .env file and returns a frozen config object.
Accepts a mandatory_keys array and a default_values array as parameter.
Inspired by Laravel config dir (yes, the Php framework).
It uses [dotenv](https://github.com/motdotla/dotenv).

### Usage
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

// no need to check if a key exists 
console.log(config.APP_ENV); // production
```



if the mandatoryKeys are not present in the .env file, it will throw an error: I do not want that my node service starts with missing
env keys. I really like to use config keys without check their existance.
