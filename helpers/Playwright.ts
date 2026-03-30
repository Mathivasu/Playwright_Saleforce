import {Page , test , BrowserContext} from "@playwright/test"
export abstract class PlaywrightWrapper {

    readonly context: BrowserContext;
    page : Page ;
    private static newPage: Page | null = null;
    constructor(page: Page, context: BrowserContext,) {
        this.page = page;
        this.context = context;
    }
    async loadApplication(url:string){
        try{
            await this.page.goto(url);
        }catch(error){
             console.log(`Error loading the page at ${url}:`);
        }
    }
    async wait(waittype: 'minWait' | 'mediumWait' | 'maxWait'){
        try{
            switch(waittype){
                 case 'minWait':
                    await this.page.waitForTimeout(3000);
                    break;
                case 'mediumWait':
                    await this.page.waitForTimeout(5000);
                    break;
                case 'maxWait':
                    await this.page.waitForTimeout(10000);
                    break;
                default:
                    console.log("Invalid wait type provided.");
                    throw new Error(`Invalid wait type: ${waittype}`);
            }
        }catch (error) {
            console.error("Error during wait:", error);
    }

    }
    async storagestate(path:string): Promise<void>{
        try{
            await this.context.storageState({path});
            console.log(`saved path to : ${path}`);
        }catch(error){
             console.error(`Failed to save storage state to: ${path}`, error);
        }
    }
    async validateelementvisibility(locator:any){
        try{
            const element = this.page.locator(locator);
            await this.page.waitForSelector(locator,{state: 'attached', timeout: 30000, strict: true });
        if (await element.isVisible()) {
                console.log(` is visible as expected.`);
            } else {
                console.error(` is not visible.`);
            }
        } catch (error) {
            console.error(`Error validating visibility of ${error}`);
        }
    }
}