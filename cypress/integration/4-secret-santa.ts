import { CYPRESS_CONFIG, SECRET_SANTA_REVEAL } from '../support';

describe('4 Secret Santa', CYPRESS_CONFIG, () => {
  it('reveals the participant assigned', () => {
    const assignee = 'Bruce Wayne';
    const secret = 'THVrZSBXaWxzb24=';

    const params = new URLSearchParams({ assignee, secret }).toString();
    cy.visit(`${SECRET_SANTA_REVEAL}?${params}`);

    cy.get('h2').should('contain', assignee);
    cy.getByCy('verification-btn').should('exist').click();
    cy.get('h1').should('contain', atob(secret));
  });
});
