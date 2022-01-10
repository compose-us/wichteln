export function createLink(url: string, {assignee, secret}){
    const params = new URLSearchParams({ assignee, secret }).toString();
	navigator.clipboard.writeText(`${url}/secret/?${params}`);
}