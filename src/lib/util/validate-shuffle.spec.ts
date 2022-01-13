import { validateShuffle } from './validate-shuffle';
import { demoParticipants } from '../demo-participants';

describe('check that validateShuffle func return what we expected', () => {
	it('return true if lists does not match', () => {
		const shuffledList = [...demoParticipants].sort((a, b) => {
			const nameA = a.firstName;
			const nameB = b.firstName;
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
		expect(validateShuffle(demoParticipants, shuffledList)).toBeTruthy();
	});
	it('return false if there are matches in lists', () => {
		expect(validateShuffle(demoParticipants, demoParticipants)).toBeFalsy();
	});
});
