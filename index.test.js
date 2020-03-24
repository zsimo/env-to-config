"use strict";

var path = require("path");
var envToConfig = require(path.resolve(__dirname, "index"));

describe("env-to-config", () => {

    test("If the .env file is not present, config must returns an empty object", () => {
        var config = envToConfig({
            path: path.resolve(__dirname, ".env2")
        });
        expect(config).toEqual ({});
    });

    test(".env with two key", () => {
        var config = envToConfig();
        expect(config).toEqual ({
            KEY_EXAMPLE: "ciao",
            KEY_NUMERIC: 2,
            KEY_ZERO: 0
        });
    });

    test("missing mandatory key", () => {
        expect(function () {
            var config = envToConfig({
                mandatory_keys: ["important"]
            });
        }).toThrowError("Missing env key: important");
    });

    test("missing mandatory key (case sensitive finding)", () => {
        expect(function () {
            var config = envToConfig({
                mandatory_keys: ["KEY_EXAMPLe"]
            });
        }).toThrowError("Missing env key: KEY_EXAMPLe");
    });

    test("add second key", () => {
        var config = envToConfig({
            default_values: [{
                key: "second_key",
                value: "pippo"
            }]
        });
        expect(config).toEqual ({
            KEY_EXAMPLE: "ciao",
            KEY_NUMERIC: 2,
            KEY_ZERO: 0,
            second_key: "pippo"
        });
    });

    test("numeric values must by integer", () => {
        var config = envToConfig();
        expect(config.KEY_NUMERIC).toStrictEqual(2);
    });
    test("0 must by integer", () => {
        var config = envToConfig();
        expect(config.KEY_ZERO).toStrictEqual(0);
    });

});
