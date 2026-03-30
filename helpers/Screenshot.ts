import { Page, test } from "@playwright/test";
import * as allure from "allure-js-commons";

export async function stepWithScreenshot(
  page: Page,
  stepName: string,
  action: () => Promise<void>
) 
{
  await test.step(stepName, async () => {
    await action();

    const screenshot = await page.screenshot();

    await allure.attachment(stepName, screenshot, "image/png");
  });
}
/*import { Page, test } from "@playwright/test";

export async function stepWithScreenshot(
  page: Page,
  stepName: string,
  action: () => Promise<void>
) {
  await test.step(stepName, async () => {
    await action();

    const screenshot = await page.screenshot();

    await test.info().attach(stepName, {
      body: screenshot,
      contentType: "image/png",
    });
  });
}
  */