var Gw2apiWrapper = require("nativescript-gw2api-wrapper").Gw2apiWrapper;
var gw2apiWrapper = new Gw2apiWrapper();

describe("greet function", function() {
    it("exists", function() {
        expect(gw2apiWrapper.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(gw2apiWrapper.greet()).toEqual("Hello, NS");
    });
});