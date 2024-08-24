import { test } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const client = await page.context().newCDPSession(page);

  await client.send("Emulation.setEmulatedVisionDeficiency", {
    type: "blurredVision",
  });
  await page.screenshot({ path: "blurredVision.png" });

  await client.send("Emulation.setEmulatedVisionDeficiency", {
    type: "reducedContrast",
  });
  await page.screenshot({ path: "reducedContrast.png" });

  await client.send("Emulation.setEmulatedVisionDeficiency", {
    type: "achromatopsia",
  });
  await page.screenshot({ path: "achromatopsia.png" });

});
