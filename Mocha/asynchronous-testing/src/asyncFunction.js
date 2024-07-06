function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John Doe', email: 'john@example.com', age: 30 };
        callback(null, data);
    }, 1000);
}

module.exports = fetchData;
