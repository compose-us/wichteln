import * as faker from 'faker/locale/de';
import { CYPRESS_CONFIG, PARTICIPANTS_FORM } from '../support';

describe('2 Participants Form', CYPRESS_CONFIG, () => {
	beforeEach(() => {
		cy.visit(PARTICIPANTS_FORM);
	});

	it('loads demo participants', () => {
		cy.getByCy('demo-load-btn').should('exist').click();
	});

	it('enabled the shuffle button when two or more participants are added', () => {
		const firstParticipant = {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName()
		};
		cy.addParticipent(firstParticipant.firstName, firstParticipant.lastName);
		cy.getByCy('shuffle-btn').should('be.disabled');

		const secondParticipant = {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName()
		};
		cy.addParticipent(secondParticipant.firstName, secondParticipant.lastName);
		cy.getByCy('shuffle-btn').should('be.not.disabled');
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
		cy.getByCy('remove-participant-btn').each((element) => {
			const targetElement = element[0];
			targetElement.click();
		});
	});
});
