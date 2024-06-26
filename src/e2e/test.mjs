import { Builder, By, Key, until } from 'selenium-webdriver';
import { assert } from 'chai';
import * as fs from 'fs';

describe('search', async function () {
    let driver;
	// [..]

    // A helper function to start a web search
    const search = async (term) => {
        // Automate DuckDuckGo search
        await driver.get('https://duckduckgo.com/');
        const searchBox = await driver.findElement(
            By.id('search_form_input_homepage'));
        await searchBox.sendKeys(term, Key.ENTER);

        // Wait until the result page is loaded
        await driver.wait(until.elementLocated(By.css('#links .result')));

        // Return page content
        const body = await driver.findElement(By.tagName('body'));
        return await body.getText();
    };

	// [..]

    // Before each test, initialize Selenium and launch the browser
    beforeEach(async function() {
        // Microsoft uses a longer name for Edge
        let browser = process.env.BROWSER;
        if (browser == 'edge') {
            browser = 'MicrosoftEdge';
        }

        // Connect to service specified in env variable or default to 'selenium'
        const host = process.env.SELENIUM || 'selenium';
        const server = `http://${host}:4444`;
        driver = await new Builder()
            .usingServer(server)
            .forBrowser(browser)
            .build();
    });

    // After each test, take a screenshot and close the browser
    afterEach(async function () {
        if (driver) {
            // Take a screenshot of the result page
            // [..]

            // Close the browser
            await driver.quit();
        }
    });

    // Our test definitions
    it('should search for "Selenium dev"', async function () {
        const content = await search('Selenium dev');
        assert.isTrue(content.includes('www.selenium.dev'));
    });

	// [..]
});
