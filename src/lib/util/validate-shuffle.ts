import type { Participant } from '../stores/participants-store';

export const validateShuffle = (originalList: Participant[], shuffledList: Participant[]) => {
	let invalidCount = 0;
	for (let i = 0; i < shuffledList.length; i++) {
		if (originalList[i] === shuffledList[i]) {
			invalidCount++;
		}
	}

	return invalidCount === 0 ? true : false;
};
