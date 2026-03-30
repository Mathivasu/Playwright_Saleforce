import { Page , BrowserContext} from "@playwright/test";
import {selector} from "./Selector"
import {PlaywrightWrapper } from   "../helpers/Playwright"


export class SaleforceLeadPage extends PlaywrightWrapper{
     constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

public async newbutton() {
    await this.validateelementvisibility(selector.lead.New_btn);
    await this.page.click(selector.lead.New_btn)
}
public async salutation(value:string){
    await this.page.click(selector.lead.salutation)
    await this.page.click(selector.lead.dropdownValueSelector_title(value))

}
public async firstname(value:string){
    await this.page.fill(selector.lead.Fristname,(value))
}
public async lastname(value:string){
    await this.page.fill(selector.lead.Lastname,(value))
}
public async company(value:string){
    await this.page.fill(selector.lead.company,value)
}
public async savebutton(){
    await this.page.click(selector.lead.Save)
}


  
}