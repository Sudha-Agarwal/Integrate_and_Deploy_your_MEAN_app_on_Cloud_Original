module.exports = {
    reporter: 'landing', // Specify the reporter to use ('spec', 'dot', 'nyan', etc.)
    timeout: 10000,   // Set the timeout of each test case to 10 seconds
    ignore: ['ignore/**/*.js'], // Specify files to ignore in testing
    //file: ['test/**/*.js'],    // Specify test files to include

    require: ['./test/global-setup-teardown.mjs'],

    // Additional configuration options can be added as needed
};
