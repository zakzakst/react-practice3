import { test, expect } from "@playwright/test";

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test("ページAとページBのスクリーンショット比較", async ({ page }, testInfo) => {
  await page.goto("http://127.0.0.1:3000/");
  await page.screenshot({
    path: `${testInfo.snapshotPath("result.png")}`,
    fullPage: true,
  });

  await page.goto("https://s-ishizaki.sakura.ne.jp/sample/04/");
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
    name: "result.png",
  });
});
