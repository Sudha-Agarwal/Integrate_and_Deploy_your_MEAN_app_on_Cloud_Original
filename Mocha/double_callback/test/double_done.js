it('avoid double done error', function(done) {
    setImmediate(function() {
        // Perform async operation
        setImmediate(function() {
            // Perform another async operation
            done(); // Call done() once after all async operations are complete
        });
    });
});

it('avoid double done error with promises', function(done) {
    // Example with Promises
    Promise.resolve()
        .then(function() {
            return new Promise(function(resolve) {
                setImmediate(resolve);
            });
        })
        .then(function() {
            return new Promise(function(resolve) {
                setImmediate(resolve);
            });
        })
        .then(function() {
            done(); // Call done() once after all promises are resolved
        })
        .catch(function(err) {
            done(err); // Call done(err) if there's an error
        });
});

it('avoid double done error with async/await', async function() {
    // Example with async/await
    try {
        await new Promise(function(resolve) {
            setImmediate(resolve);
        });

        await new Promise(function(resolve) {
            setImmediate(resolve);
        });

        //done(); // Call done() once after all async operations are complete
    } catch (err) {
        done(err) // Call done(err) if there's an error
    }
});

