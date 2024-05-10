const { Builder, until } = require('selenium-webdriver');

async function checkhomepage() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:4200');
        await driver.wait(until.titleIs('SeleniumTestApp'), 10000)
    } finally {
        await driver.quit();
    }
}

checkhomepage();
