<script lang="ts">
	import { onMount } from 'svelte';
	import { Badge, Button, Card, CardBody, CardFooter, ListGroup, ListGroupItem } from 'sveltestrap';
	import { randomizeParticipants } from '$lib/util/shuffle-participants';
	import { Participant, participants } from '$lib/stores/participants-store';
	import { validateShuffle } from '$lib/util/validate-shuffle';
	import CardLabel from '$lib/components/card-label.svelte';

	let pageReady = false;
	let shuffledList = [];

	onMount(() => {
		if ($participants.length === 0) {
			document.location = '/';
		} else {
			pageReady = true;
		}
	});

	shuffledList = randomizeParticipants($participants);

	const validateList = () => {
		if (!validateShuffle($participants, shuffledList)) {
			reshuffle();
		}
	};

	const reshuffle = () => {
		shuffledList = randomizeParticipants($participants);
		validateList();
	};

	const copyLink = (participant: Participant, assignment: Participant) => {
		const assignee = `${participant.firstName} ${participant.lastName}`;
		const secret = btoa(`${assignment.firstName} ${assignment.lastName}`);
		navigator.clipboard.writeText(`${document.location.origin}/${assignee}/${secret}`);
	};

	validateList();
</script>

{#if pageReady}
	<Card>
		<CardLabel label="Participants Assignments" backBtn={true} />

		<CardBody>
			<div class="container">
				<div class="list">
					<ListGroup>
						{#each $participants as participant, index}
							<ListGroupItem
								action
								href="#"
								on:click={() => copyLink(participant, shuffledList[index])}
							>
								{`${participant.firstName} ${participant.lastName}`}
							</ListGroupItem>
						{/each}
					</ListGroup>
				</div>
			</div>
		</CardBody>

		<CardFooter>
			<Button on:click={reshuffle} block>Reshuffle</Button>
		</CardFooter>
	</Card>
{/if}

<style>
	.container {
		display: flex;
		gap: 0 50px;
		padding: 0;
	}
	.list {
		flex-grow: 1;
	}
	.action {
		border: thin solid red;
	}
</style>
