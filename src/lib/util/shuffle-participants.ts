import type { Participant } from '../stores/participants-store';

export const randomizeParticipants = (participants: Participant[]): Participant[] => {
	const _participants = [...participants];
	// let invalidCount = [];

	// Fisher–Yates Shuffle
	// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
	for (let i = 0; i < _participants.length; i++) {
		const randomIndex = i + Math.floor(Math.random() * (_participants.length - i));
		const temp = _participants[randomIndex];

		_participants[randomIndex] = _participants[i];
		_participants[i] = temp;
	}

	return _participants;
};
