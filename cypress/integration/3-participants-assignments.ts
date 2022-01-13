import * as faker from 'faker/locale/de';
import { CYPRESS_CONFIG, PARTICIPANTS_ASSIGNMENTS, PARTICIPANTS_FORM } from '../support';

const maxParticipants = 3;

describe('3 Participants Assignments', CYPRESS_CONFIG, () => {
	beforeEach(() => {
		cy.visit(PARTICIPANTS_FORM);
		for (let i = 0; i < maxParticipants; i++) {
			const firstName = faker.name.firstName();
			const lastName = faker.name.lastName();
			cy.addParticipent(firstName, lastName);
		}
	});

	it('shuffles participants and copies link', () => {
		cy.getByCy('shuffle-btn').should('exist').click();

		cy.url().should('include', PARTICIPANTS_ASSIGNMENTS);
		cy.get('.list-group').children().should('have.length', maxParticipants);

		cy.get('.list-group-item').first().click();

		cy.window()
			.its('navigator.clipboard')
			.invoke('readText')
			.then((text) => {
				if (text.length < 0) {
					console.log(text);
				} else {
					console.warn('!!! clipboard is empty!');
				}
			});
	});
});
