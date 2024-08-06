const {test, expect} = require('@playwright/test');

const {LOGIN_USERS, PERSONAL_INFO} = require('../e2eConstants')
const {LoginPage} = require('../page-objects/LoginPage')
const {SwagOverviewPage} = require('../page-objects/SwagOverviewPage')
const {CheckoutPersonalInfoPage} = require('../page-objects/CheckoutPersonalInfoPage')
const {CheckoutSummaryPage} = require('../page-objects/CheckoutSummaryPage')

test.describe('E2E Example User Flow', () => {
  let loginPage
  let swagOverviewPage
  let checkoutPersonalInfoPage
  let checkoutSummaryPage

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    swagOverviewPage = new SwagOverviewPage(page)
    checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page)
    checkoutSummaryPage = new CheckoutSummaryPage(page)

    await loginPage.open();
  })

  test('Login to application, add an item to cart, input personal information, continue to checkout, check total', async ({page}) => {
    // Login to Sauce Shop
    await loginPage.signIn(LOGIN_USERS.STANDARD)

    // Navigate to backpack product page
    await page.click('[data-test="item-4-img-link"]');

    // Add backpack to cart
    await page.click('#add-to-cart');

    // Navigate to cart
    await page.click('#shopping_cart_container');

    // Begin check out flow
    await page.click('#checkout');

    // Fill out personal information on check out page
    await checkoutPersonalInfoPage.submitPersonalInfo(
      PERSONAL_INFO.STANDARD,
    )

    // Check if total is correct on check out page
    const totalItemNameElement = page.locator('.summary_total_label');
    await expect(totalItemNameElement).toContainText('$32.39');
    
  })
})
