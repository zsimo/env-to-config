'use strict';

var path = require("path");
var envToConfig = require(path.resolve(__dirname, "../", "dist"));


describe("env-to-config", () => {

    test("If the .env file is not present, config must returns an empty object", () => {
        var config = envToConfig({
            path: path.resolve(__dirname, ".env")
        });
        expect(config).toEqual ({});
    });

    test(".env with one key", () => {
        var config = envToConfig();
        expect(config).toEqual ({KEY_EXAMPLE: "ciao"});
    });

    test("missing mandatory key", () => {
        expect(function () {
            var config = envToConfig({
                mandatory_keys: ["important"]
            });
        }).toThrowError("Missing env key: important");
    });

    // test("add second key", () => {
    //     var config = envToConfig({
    //         default_values: [{
    //             second_key: "pippo"
    //         }]
    //     });
    //     expect(config).toEqual ({
    //         KEY_EXAMPLE: "ciao",
    //         second_key: "pippo"
    //     });
    // });

});
