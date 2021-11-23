import type { Participant } from './stores/participants-store';

export function formSerializer({ elements }) {
	let obj = {};

	for (let i = 0; i < elements.length; i++) {
		if (
			elements[i].nodeName === 'INPUT' &&
			elements[i].type === 'text' &&
			elements[i].value !== ''
		) {
			obj[elements[i].name] = elements[i].value;
		}
	}

	return obj as Participant;
}
