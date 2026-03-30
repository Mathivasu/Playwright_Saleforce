import {test as baseTest} from '@playwright/test'
import {Homepage} from '../Pages/Saleforcehomepage'
import {SaleforceAccountPage} from '../Pages/SaleforceAccountpage'
import{SaleforceLogin} from '../Pages/SaleforceLogin'
import{SaleforceLeadPage} from '../Pages/SaleforceLeadpage'
type saleforcefix = {
  saleforcelogin:SaleforceLogin
  saleforceHome : Homepage
  saleforceAccount:SaleforceAccountPage
  saleforcelead : SaleforceLeadPage
}

export const test = baseTest.extend<saleforcefix>({


  saleforceHome: async ({ page, context }, use) => {
        const SalesforceHome1 = new Homepage(page, context);
        await use(SalesforceHome1);
    },
    saleforceAccount: async({page,context},use) =>{
        const SaleforceAccount1 = new SaleforceAccountPage(page, context);
        await use(SaleforceAccount1)
    },
    saleforcelogin:async({page,context},use) =>{
      const SaleforceLogin1 = new SaleforceLogin(page,context);
       await use(SaleforceLogin1)
    },
    saleforcelead :async({page,context},use) =>{
      const SaleforceLead1 = new SaleforceLeadPage(page,context);
       await use(SaleforceLead1)
    }


    })