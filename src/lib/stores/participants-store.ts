import { writable } from 'svelte/store';

export type Participant = {
	firstName: string;
	lastName: string;
	copied?: boolean;
};

export const participants = writable<Participant[]>([]);
