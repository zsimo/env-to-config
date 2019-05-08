# env-to-config

[![Build Status](https://travis-ci.org/zsimo/env-to-config.svg?branch=master)](https://travis-ci.org/zsimo/env-to-config)
[![codecov](https://codecov.io/gh/zsimo/env-to-config/branch/master/graph/badge.svg)](https://codecov.io/gh/zsimo/env-to-config)


Read .env file and returns a frozen config object.
Accepts a mandatory_keys array and a default_values array as parameter.
Inspired by Laravel config dir (yes, the php framework).



if the mandatoryKeys are not present in the .env file, it will throw an error: I do not want that my node service starts with missing
env keys. I really like to use config keys without check their existance.
