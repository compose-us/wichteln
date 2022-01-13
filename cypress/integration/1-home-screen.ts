import { APP_URL, CYPRESS_CONFIG, PARTICIPANTS_FORM } from '../support';

describe('1 Home Screen', CYPRESS_CONFIG, () => {
	beforeEach(() => {
		cy.visit(APP_URL);
	});

	it('displays instructions', () => {
		cy.get('h1').should('exist').contains('WICHTELN (Secret Santa)');
	});

	it('clicks on start button and goes to participants form', () => {
		cy.getByCy('start-btn').should('exist').click();
		cy.url().should('include', PARTICIPANTS_FORM);
	});
});
