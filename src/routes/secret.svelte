<script lang="ts">
	import { goto } from '$app/navigation';

	import CardLabel from '$lib/components/card-label.svelte';
	import SecretSanta from '$lib/components/secret-santa.svelte';
	import { onMount } from 'svelte';

	import { Button, ButtonGroup, Card, CardBody, CardFooter } from 'sveltestrap';

	let queryString: URLSearchParams;
	let assignee: string;
	let secret: string;

	onMount(() => {
		queryString = new URLSearchParams(document.location.search.toString());
		assignee = queryString.get('assignee');
		secret = queryString.get('secret');
	});

	let reveal = false;
</script>

<Card>
	<CardLabel label="Wichtel-Partner" />

	<CardBody>
		{#if assignee && secret}
			<div class="verification">
				{#if reveal}
					<h2>{assignee}, Dein Wichtel-Partner:</h2>
				{:else}
					<h2>Bist Du wirklich: {assignee}?</h2>
				{/if}

				<SecretSanta {reveal} {secret} />
			</div>
		{:else}
			<p>ungültige url</p>
		{/if}
	</CardBody>

	<CardFooter>
		<div class="verification">
			{#if !reveal}
				<ButtonGroup>
					<Button size="lg" color="success" on:click={() => (reveal = true)}>Ja</Button>
					<Button size="lg" color="danger" on:click={() => goto('/')}>Nein</Button>
				</ButtonGroup>
			{/if}
		</div>
	</CardFooter>
</Card>

<style>
	.verification {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 50%;
		margin: 0 auto;
	}
</style>
