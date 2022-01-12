import type { Participant } from '$lib/stores/participants-store';

type linkParams = { participant: Participant; assignment: Participant };

export function createLink(url: string, { participant, assignment }: linkParams, encodeMethod: string = 'btoa'): string {
	const assignee = `${participant.firstName} ${participant.lastName}`;
	const secret = (encodeMethod == 'btoa') ? btoa(`${assignment.firstName} ${assignment.lastName}`) : Buffer.from(`${assignment.firstName} ${assignment.lastName}`).toString("base64");
	const params = new URLSearchParams({ assignee, secret }).toString();
	return `${url}/secret/?${params}`;
}
