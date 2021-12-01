import * as faker from 'faker/locale/de';
import { CYPRESS_CONFIG, PARTICIPANTS_FORM } from '../support';

describe('2 Participants Form', CYPRESS_CONFIG, () => {
  beforeEach(() => {
    cy.visit(PARTICIPANTS_FORM);
  });

  it('loads demo participants', () => {
    cy.getByCy('demo-load-btn').should('exist').click();
  });

  it('adds participants', () => {
    const maxParticipants = 5;
    for (let i = 0; i < maxParticipants; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      cy.addParticipent(firstName, lastName);
    }
  });

  it('removes participants', () => {
    cy.getByCy('demo-load-btn').should('exist').click();
    cy.getByCy('remove-participant-btn').each(element => {
      const targetElement = element[0];
      targetElement.click();
    });
  });
});
