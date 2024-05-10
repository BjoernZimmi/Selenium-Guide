const { Builder, until, By } = require('selenium-webdriver');

async function testDynamicContent() {
    let driver = await new Builder().forBrowser('chrome').build();
try {
    await driver.get('http://localhost:4200/dynamic-content');
    let dynamicElement = await driver.wait(until.elementLocated(By.id('dynamic-element-id')), 10000);

    console.log(await dynamicElement.getText());

    await driver.findElement(By.css('button[type="submit"')).click();


} finally {
    await driver.quit();
    console.log("driver closed");
}

}

/**
 * To load the Selenium driver: node D:\Arbeiten\Angular\selenium-test-app\src\e2e\test-dynamic-content.js
 *  **/
testDynamicContent();