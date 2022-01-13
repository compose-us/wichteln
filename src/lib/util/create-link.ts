import type { Participant } from '$lib/stores/participants-store';
import { encode } from './encode-decode';

type linkParams = { participant: Participant; assignment: Participant };

export function createLink(
	url: string,
	{ participant, assignment }: linkParams,
	encoder: Function = encode
): string {
	const assignee = `${participant.firstName} ${participant.lastName}`;
	const secret = encoder(`${assignment.firstName} ${assignment.lastName}`);
	const params = new URLSearchParams({ assignee, secret }).toString();
	return `${url}/secret/?${params}`;
}
