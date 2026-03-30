

import {expect} from '@playwright/test'
import { test} from '../../customFixtures/saleforceFix'
import {readdata} from '../../helpers/csv'
import {FakerData} from '../../helpers/fakerUtils'
const filename = './Utilis/accounts.csv'
test.use({ storageState: "Utilis/storageState.json" }); // Use saved login session

test("Creating an account using CSV data", async ({saleforcelogin,saleforceHome ,saleforceAccount }) => {
//await saleforcelogin.login()
const datavalue = await readdata(filename);
test.info().annotations.push(
    {type: 'TestCase', description: 'create an account using csv data'}
)
 for(const row of datavalue){
    const {Rating,Type,Industry,Ownership,Fax,Website,accsite,employee,annual,Billingcountry,BillingStreet,ShippingStreet,BillingCity,PostalCode} = row
    const accname1 = FakerData.getFirstName();
    await saleforceHome.weburl()
    await saleforceHome.applaunch()
    await saleforceHome.searchbar()
    await saleforceHome.Accounts()
    await saleforceAccount.newbutton()
    await saleforceAccount.accname(accname1)
    await saleforceAccount.ratingbutton(Rating)
    await saleforceAccount.Typebtn(Type)
   // await saleforceAccount.industry(Industry)
    await saleforceAccount.owner(Ownership)
    await saleforceAccount.accountnumber(String(FakerData.number()));
    await saleforceAccount.Fax(Fax)
    await saleforceAccount.website(Website)
    await saleforceAccount.accsite(accsite)
    await saleforceAccount.employee(employee)
    await saleforceAccount.annual(annual)
    await saleforceAccount.Billingcountry(Billingcountry)
    await saleforceAccount.billing(BillingStreet)
    await saleforceAccount.shipping(ShippingStreet)
    await saleforceAccount.billcity(BillingCity)
    await saleforceAccount.billingpostal(PostalCode)

    






   

    




   

 }
 
})
