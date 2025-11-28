import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate from home to about page via footer link", async ({ page }) => {
    // Load the home page
    await page.goto("/en");

    // Verify we're on the home page
    await expect(page).toHaveURL("/en");

    // Find and click the About link in the footer
    const footer = page.locator("footer");
    const aboutLink = footer.getByRole("link", { name: /about/i });
    await aboutLink.click();

    // Verify navigation to the about page
    await expect(page).toHaveURL("/en/about");

    // Verify the About page content loaded
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("should load the home page correctly", async ({ page }) => {
    await page.goto("/en");

    // Verify the page has a main content area
    await expect(page.locator("main")).toBeVisible();

    // Verify the navbar is present
    await expect(page.locator("nav").first()).toBeVisible();

    // Verify the footer is present
    await expect(page.locator("footer")).toBeVisible();
  });
});
