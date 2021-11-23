import { writable } from 'svelte/store';

export type Participant = {
	firstName: string;
	lastName: string;
};

export const participants = writable<Participant[]>([]);
