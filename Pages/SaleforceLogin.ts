
import {PlaywrightWrapper} from '../helpers/Playwright'
import {selector} from '../Pages/Selector'
import {Page , test , BrowserContext} from "@playwright/test"
import credential from '../Constants/credential.json'
import{URLConstants} from '../Constants/url'
import{stepWithScreenshot} from '../helpers/Screenshot'
export class SaleforceLogin extends PlaywrightWrapper{
     constructor(page: Page, context: BrowserContext) {
            super(page, context);
        }

public async login(){
       
       const { username, password } = credential["USERLOGIN"];

  await stepWithScreenshot(this.page, "Load Application", async () => {
    await this.loadApplication(URLConstants.adminURL)
  });

  await stepWithScreenshot(this.page, "Enter Username", async () => {
    await this.page.fill(selector.username, username)
  });

  await stepWithScreenshot(this.page, "Enter Password", async () => {
    await this.page.fill(selector.password, password)
  });

  await stepWithScreenshot(this.page, "Click Login Button", async () => {
    await this.page.click(selector.login_btn)
  });

  await stepWithScreenshot(this.page, "Wait for Home Page", async () => {
    await this.page.waitForURL("**lightning.force.com**");
  });

  await stepWithScreenshot(this.page, "Save Storage State", async () => {
    await this.storagestate("Utilis/storageState.json")
  });

  await stepWithScreenshot(this.page, "Validate Home Icon", async () => {
    await this.validateelementvisibility(selector.Icon_button)
  });
}
        
}















 /*

 
  await page.locator("#username") .fill("vasumathik1497.0a3172adb3db@agentforce.com");

  await page.locator("#password") .fill("Vasumathi@1403");

  await page.locator("#Login").click();
  await page.waitForURL("**lightning.force.com**")

  // save authenticated session
  await page.context().storageState({ path: "Utilis/storageState.json"});
});
*/