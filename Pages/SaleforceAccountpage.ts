import { Page , BrowserContext} from "@playwright/test";
import {selector} from "./Selector"
import {PlaywrightWrapper } from   "../helpers/Playwright"

export class SaleforceAccountPage extends PlaywrightWrapper{
     constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }
    public async newbutton(){
        await this.page.click(selector.accounts.New)
    }
     public async accname(value : string){
        await this.page.fill(selector.accounts.Accountname,value)
    }
     public async ratingbutton(data:string){
      console.log(data)
        await this.page.click(selector.accounts.rating_btn)
        await this.page.click(selector.accounts.dropdownValueSelector(data))
    }
    public async accountnumber(data: string){
        await this.page.fill(selector.accounts.Accountnumberinput,data)

    }
    public async parentaccountnumber(data: string){
      await this.page.fill(selector.accounts.parentaccount,data)
        
    }
     public async Fax(data: string){
      await this.page.fill(selector.accounts.Fax,data)
        
    }
  
     public async website(data: string){
      await this.page.fill(selector.accounts.website,data)
        
    }
     public async accsite(data: string){
      await this.page.fill(selector.accounts.Accountsite,data)
        
    }
     public async ticker(data: string){
      await this.page.fill(selector.accounts.Tickersymbol,data)
        
    }
     public async employee(data: string){
      await this.page.fill(selector.accounts.Employee,data)
        
    }
     public async annual(data: string){
      await this.page.fill(selector.accounts.Annual,data)
        
    }
     public async sic(data: string){
      await this.page.fill(selector.accounts.Siccode,data)
        
    }
     public async billing(data: string){
      await this.page.fill(selector.accounts.Billingstreet,data)
        
    }
     public async shipping(data: string){
      await this.page.fill(selector.accounts.Shippingstreet,data)
        
    }
     public async billcity(data: string){
      await this.page.fill(selector.accounts.Billingcity,data)
        
    }
     public async shippingcity(data: string){
      await this.page.fill(selector.accounts.Shippingcity,data)
        
    }
     public async billingpostal(data: string){
      await this.page.fill(selector.accounts.Billingpostalcode,data)
        
    }
     public async shippingpostal(data: string){
      await this.page.fill(selector.accounts.Shippingpostalcode,data)
        
    }
     public async des(data: string){
      await this.page.fill(selector.accounts.description,data)
        
    }
    public async saveandnew(){
        await this.page.click(selector.accounts.saveandnew)
    }
    public async Typebtn(data :string){
      await this.page.click(selector.accounts.accountTypeDDBtn)
      await this.page.click(selector.accounts.dropdownValueSelector(data))

    }
    public async industry(data: string) {
  await this.page.click(selector.accounts.industry)

  const option = this.page.getByRole('option', { name: data })

  await option.waitFor()
  await option.click()
}

    public async owner(data:string){
      await this.page.click(selector.accounts.ownership)
      await this.page.click(selector.accounts.dropdownValueSelector(data))

    }
    public async Billingcountry(data:string){
      await this.page.fill(selector.accounts.Billingcountry,data)

    }
    public async Billingstate(data:string){
      await this.page.click(selector.accounts.billingStateInput)
      //await this.page.click(selector.accounts.dropdownValueSelector(data))

    }


}