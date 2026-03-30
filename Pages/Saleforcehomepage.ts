import {Page , test , BrowserContext} from "@playwright/test"
import {selector} from "./Selector"
import {PlaywrightWrapper } from   "../helpers/Playwright"
import{URLConstants} from "../Constants/url"

export class Homepage extends PlaywrightWrapper{
   constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }
    public async weburl(){
        await this.page.goto(URLConstants.homepageURL)

    }
    public async applaunch(){
        await this .page.click(selector.Icon_button)
    } 
    public async searchbar(){
        await this.page.fill(selector.search,"Accounts")
    }
    public async Accounts(){
        await this.page.waitForSelector(selector.accounts.Account);
       await this .page.click(selector.accounts.Account)
    }
    public async searchbar_leads(){
        await this.page.fill(selector.search,"Leads")

    }
    public async Leads(){
        await this.page.waitForSelector(selector.lead.lead_text);
       await this .page.click(selector.lead.lead_text)
    }


}
