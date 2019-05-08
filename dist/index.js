"use strict";

var path = require("path");
var dotenv = require('dotenv');
var config;




module.exports = function (options) {

    var mandatoryKeys = (options && options.mandatory_keys && options.mandatory_keys.forEach) ? options.mandatory_keys : [];
    var defaultValues = (options && options.default_values && options.default_values.forEach) ? options.default_values : [];

    config = dotenv.config((options && options.path) ?
        {
            path: options.path
        } :
        null).parsed;

    if (!config) {
        config = {};
    }

    if (config.error) {
        throw config.error;
    }

    mandatoryKeys.forEach(function (key) {
        if (!config.hasOwnProperty(key)) {
            var message = "Missing env key: " + key;
            throw new Error(message);
        }
    });

    defaultValues.forEach(function (defaultObj) {
        if (defaultObj.key && !config.hasOwnProperty(defaultObj.key)) {
            config[defaultObj.key] = defaultObj.value;
        }
    });

    return Object.freeze(config);
};