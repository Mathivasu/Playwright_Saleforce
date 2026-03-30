import {expect} from '@playwright/test'
import { test} from '../../customFixtures/saleforceFix'
import{SaleforceLogin} from '../../Pages/SaleforceLogin'

test("Loginpage and save storage state", async ({ page ,context}) => {
   const login = new SaleforceLogin(page, context);
    await login.login()

  });


