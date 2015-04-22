load("init.js");


// testOnDevice(devices.small,
// testOnAllDevices(


testOnAllDevices("Home page", "/", function (driver, device) {

    GalenPages.sleep(2000);  //slow down for demo

    checkLayout(driver, "specs/homePage.spec", device.tags);
});
