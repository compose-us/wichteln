import type { Participant } from '$lib/stores/participants-store';

type linkParams = { participant: Participant; assignment: Participant };

export function createLink(url: string, { participant, assignment }: linkParams): string {
	const assignee = `${participant.firstName} ${participant.lastName}`;
	const secret = btoa(`${assignment.firstName} ${assignment.lastName}`);

	const params = new URLSearchParams({ assignee, secret }).toString();
	return `${url}/secret/?${params}`;
}
