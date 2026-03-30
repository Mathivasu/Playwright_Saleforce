
import {expect} from '@playwright/test'
import { test} from '../../customFixtures/saleforceFix'
import {readdata} from '../../helpers/csv'
import {FakerData} from '../../helpers/fakerUtils'
let fname = FakerData.getFirstName()
test.use({ storageState: "Utilis/storageState.json" });
test("Creating lead" ,async({saleforceHome,saleforcelead}) =>{
test.info().annotations.push(
    {type: 'TestCase', description: 'create an Lead'})
    
    await saleforceHome.weburl()
    await saleforceHome.applaunch()
    await saleforceHome.searchbar_leads()
    await saleforceHome.Leads()
    await saleforcelead.newbutton()
    await saleforcelead.salutation("Mr.")
    await saleforcelead.firstname(fname)
    await saleforcelead.lastname(FakerData.getLastName())
    await saleforcelead.company("Freshwork")
    await saleforcelead.savebutton();






})
