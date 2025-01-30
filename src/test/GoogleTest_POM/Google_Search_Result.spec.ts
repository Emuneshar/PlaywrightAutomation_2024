import { test, Page } from "@playwright/test";
import { GoogleSearchResults } from "../../main/Google_POM/GoogleSearchResults";
import { GoogleHome } from "../../main/Google_POM/GoogleHome";

// Declare global variables with proper types
let page: Page;
let googleHome: GoogleHome;
let googleSearchResults: GoogleSearchResults;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    googleHome = new GoogleHome(page);
    googleSearchResults = new GoogleSearchResults(page);
}); // end of beforeAll

test('Capture search number for soccer', async () => {
    await page.goto("https://www.google.com");
    // Search for soccer
    await googleHome.search("soccer");
    // Click on the search button
    await googleHome.clickOnSearchButton();
    // Capture and print out the search number for soccer
    await googleSearchResults.getSearchResult();
});
