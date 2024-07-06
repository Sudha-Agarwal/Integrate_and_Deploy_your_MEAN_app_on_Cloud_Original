it('double done', function(done) {
    // calling `done()` twice will be an error
    setImmediate(done);   // Call done() the first time
    setImmediate(done);   // Call done() the second time
  });
  
  it('should do something asynchronously', function(done) {
    setTimeout(function() {
        // Perform assertions or other test logic
        done(); // Call done to indicate the test is complete
    }, 1000);
});