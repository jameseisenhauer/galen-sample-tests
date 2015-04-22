
var domain = "localhost.nike.com:3000";

var devices = {
    small: {
        deviceName: "small",
        size: "450x800",
        tags: ["small"]
    },
    medium: {
        deviceName: "medium",
        size: "600x800",
        tags: ["medium"]
    },
    large: {
        deviceName: "large",
        size: "1100x800",
        tags: ["large"]
    }
};



function openDriver(url, size) {

   var driver = createDriver(null, size);

    session.put("driver", driver);

    if (url != null) {
        if (url.indexOf("http://") != 0 && url.indexOf("https://") != 0) {
            url = "http://" + domain + url;
        }
        driver.get(url);
    }
    else {
        driver.get("http://" + domain);
    }
    return driver;
}


afterTest(function (test) {
    var driver = session.get("driver");
    if (driver != null) {
        if (test.isFailed()) {
            session.report().info("Screenshot").withAttachment("Screenshot", takeScreenshot(driver));
        }
        driver.quit();
    }
});

function _test(testNamePrefix, url, callback) {
    test(testNamePrefix + " on ${deviceName} device", function (device) {
        var driver = openDriver(url, device.size);
        callback.call(this, driver, device);
    });
}

function testOnAllDevices(testNamePrefix, url, callback) {
    forAll(devices, function () {
        _test(testNamePrefix, url, callback);
    });
}

function testOnDevice(device, testNamePrefix, url, callback) {
    forOnly(device, function() {
        _test(testNamePrefix, url, callback);
    });
}



/*
    Exporting functions to all other tests that will use this script
*/
(function (export) {
    export.devices = devices;
    export.openDriver = openDriver;
    export.testOnAllDevices = testOnAllDevices;
})(this);
