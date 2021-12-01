// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare namespace Cypress {
  interface Chainable {
    getByCy(value: string): Chainable<Element>;
    addParticipent(firstName: string, lastName: string): Chainable<Element>;
  }
}

Cypress.Commands.add('getByCy', (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});

Cypress.Commands.add('addParticipent', (firstName, lastName) => {
  cy.get('input[name=firstName]').should('exist').type(firstName);
  cy.get('input[name=lastName]').should('exist').type(lastName);
  cy.getByCy('add-participant-btn').should('exist').click();
});
