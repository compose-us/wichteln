<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import CardLabel from '$lib/components/card-label.svelte';
	import SecretSanta from '$lib/components/secret-santa.svelte';
	import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader } from 'sveltestrap';

	const pageQuery = $page.query;

	const assignee = pageQuery.get('assignee');
	const secret = pageQuery.get('secret');

	let reveal = false;
</script>

<Card>
	<CardLabel label="Wichteln Assignment" />

	<CardBody>
		{#if assignee && secret}
			<div class="verification">
				{#if reveal}
					<h2>{assignee}, your secret santa assignment is:</h2>
				{:else}
					<h2>Are you really: {assignee}?</h2>
				{/if}

				<SecretSanta {reveal} {secret} />
			</div>
		{:else}
			<p>invalid url</p>
		{/if}
	</CardBody>

	<CardFooter>
		<div class="verification">
			{#if !reveal}
				<ButtonGroup>
					<Button size="lg" color="success" on:click={() => (reveal = true)}>Yes</Button>
					<Button size="lg" color="danger" on:click={() => goto('/')}>No</Button>
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
