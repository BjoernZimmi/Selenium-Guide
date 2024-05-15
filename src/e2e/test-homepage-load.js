const { Builder, By, until } = require('selenium-webdriver');

async function checkhomepage() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:4200');
        await driver.wait(until.titleIs('Selenium Test App'), 10000);

        console.log(await driver.wait(until.titleIs('Selenium Test App'), 10000));

    } finally {
        await driver.quit();
    }
}

async function testDynamicContent() {
    let driver = await new Builder().forBrowser('chrome').build();
try {
    await driver.get('http://localhost:4200');
    let dynamicElement = await driver.wait(until.elementLocated(By.id('dynamic-element-id')), 10000);

    console.log(await dynamicElement.getText());

    await driver.findElement(By.css('button[type="submit"]')).click();

    

} finally {
    await driver.quit();

    console.log("driver closed");

}

}


testDynamicContent();


/**
 * To load the Selenium driver: node D:\Arbeiten\Angular\selenium-test-app\src\e2e\test-homepage-load.js
 **/
checkhomepage();
