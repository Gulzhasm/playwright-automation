import {chromium, test} from "@playwright/test"

test("Login Test Demo",  async() =>{

const browser = await chromium.launch({
    headless: false
});
const context = await browser.newContext({});
const page = await context.newPage();

await page.goto("https://ecommerce-playground.lambdatest.io/");
await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]");
await page.click("'Login'");

})