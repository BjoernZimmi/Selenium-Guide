const { Builder, until, By } = require('selenium-webdriver');

async function testDynamicContent() {
    let driver = await new Builder().forBrowser('chrome').build();
try {
    await driver.get('http://localhost:4200/dynamic-content');
    let dynamicElement = await driver.wait(until.elementLocated(By.id('dynamic-element-id')), 10000);

    console.log(await dynamicElement.getText());

} finally {
    await driver.quit();

}

}

testDynamicContent();