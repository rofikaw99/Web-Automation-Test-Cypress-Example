Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
/// <reference types="Cypress" />
import { faker } from '@faker-js/faker'
import { format, addMinutes, addDays } from 'date-fns'
import bannerPage from '../model/Campaign/banner_page'

Cypress.Commands.add('createBanner', function (name) {
  cy.get(bannerPage.menuCampaign).click()
  cy.get(bannerPage.childBanner).click()
  cy.get(bannerPage.createBanner).click()
  cy.get(bannerPage.bannerName).type(name)
  cy.get(bannerPage.selectRegion).click().type('{downArrow}{enter}')
  cy.get(bannerPage.selectArchetype).click().type('{downArrow}{enter}')
  cy.get(bannerPage.redirect_to).type('{downArrow}{enter}')
  cy.get(bannerPage.navigation_url).type(faker.internet.domainName())
  cy.get(bannerPage.start_at).dblclick().clear().type(format(new Date(), 'yyyy-MM-dd'))
  cy.get(bannerPage.start_time)
    .dblclick()
    .clear()
    .type(format(new Date(addMinutes(new Date(), 10)), 'HH:mm'))
  cy.get(bannerPage.finish_at)
    .dblclick()
    .clear()
    .type(format(new Date(addDays(new Date(), 1)), 'yyyy-MM-dd'))
  cy.get(bannerPage.end_time)
    .dblclick()
    .clear()
    .type(format(new Date(addMinutes(new Date(), 50)), 'HH:mm'))
  cy.get(bannerPage.image).attachFile('image/imageTest.jpg')
  cy.wait(3000)
  cy.get(bannerPage.buttonSave).click()
  cy.contains('Yes').click()
  cy.url().should('include', '/banner')
})
