const Mocha = require('mocha');

// Delayed root suite
describe("Test delayed root suite", function() {
    before(function(done) {
        setTimeout(done, 1000); // Simulating async setup with a 1-second delay
    });

    it("should do something", function() {
        // Test logic for "should do something"
    });

    it("should do nothing", function() {
        // Test logic for "should do nothing"
    });
});

// Create a new instance of Mocha
const MochaInstance = new Mocha();

// Add the test file (my-test-file.js) to Mocha instance
//const path = require('path');
//const testFilePath = path.resolve(__dirname, 'my-test-file.js');

//MochaInstance.addFile(testFilePath);

// Run the tests
MochaInstance.run(function(failures) {
    process.exitCode = failures ? 1 : 0; // Set exit code based on test failures
});
