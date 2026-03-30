export const selector = {
    username: "#username",
    password:"#password",
    login_btn: "#Login",
    Icon_button : ".slds-icon-waffle",
    search: ".slds-input",
    viewAll: "//button[normalize-space()='View All']",
    
    accounts: {
        Account : "p[class='slds-truncate']",
        New : "//a[@title='New']",
        Accountname : "//label[text()='Account Name']//following::input[1]",
        rating_btn : "//button[@aria-label='Rating']",
        dropdownValueSelector: (data: string) => `//span[normalize-space()='${data}']`,
        dropdownValueSelector1: (data: string) => `//span[@title='${data}']`,
        //span[@title='Agriculture']
        Accountnumberinput : "//input[@name='Phone']",
        parentaccount : "(//input[contains(@id,'combobox-input')])[1]",
        Fax : "//input[@name='Fax']",
        Accnumber: "[name='AccountNumber']",
        website : "[name='Website']",
        Accountsite: "[name='Site']",
        Tickersymbol: "[name='TickerSymbol']",
        Employee : "[name='NumberOfEmployees']",
        Annual : "[name='AnnualRevenue']",
        Siccode :"[name='Sic']",
        Billingstreet : "(//textarea[@name='street'])[1]",
        Shippingstreet :"(//textarea[@name='street'])[2]",
        Billingcity : "(//input[@name='city'])[1]",
        Shippingcity : "(//input[@name='city'])[2]",
        Billingpostalcode : "(//input[@name='postalCode'])[1]",
        Shippingpostalcode : "(//input[@name='postalCode'])[2]",
        description : "(//textarea[contains(@class,'textarea')])[3]",
        saveandnew : "//button[normalize-space()='Save & New']",
        verificationText: `//slot//lightning-formatted-text[@slot='primaryField']`,
        accountTypeDDBtn: "//label[text()='Type']//following::button[1]",
        industry: `//label[text()='Industry']//following::button[1]`,
        ownership: "//label[text()='Ownership']//following::button[1]",
        Billingcountry : "(//input[@name= 'country'])[1]",
        billingStateInput: `//label[text()='Billing State/Province']//following::input[1]`
    },
    lead:{
         lead_text: "p[class='slds-truncate'] b",
         New_btn:  "//div[@title='New']",
         salutation: "button[name='salutation']",
        dropdownValueSelector_title: (data: string) => `//span[@title='${data}']`,
        company: "[name='Company']",
        Lastname: "[name='lastName']",
        Fristname: "[name='firstName']",
        Save: "[name='SaveAndNew']", 
        toast: "//span[contains(@class,'toastMessage')]"
    },
    



}