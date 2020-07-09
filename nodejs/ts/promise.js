var wait5Secs = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 5000);
});
wait5Secs.then(function (data) { return console.log(data); })["catch"](function (err) { return console.error(err); });
