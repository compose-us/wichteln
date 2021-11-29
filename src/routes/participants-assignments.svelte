<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Button,
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		CardTitle,
		ListGroup,
		ListGroupItem
	} from 'sveltestrap';
	import { randomizeParticipants } from '$lib/util/shuffle-participants';
	import { participants } from '$lib/stores/participants-store';
	import { validateShuffle } from '$lib/util/validate-shuffle';

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

	validateList();
</script>

{#if pageReady}
	<Card>
		<CardHeader>
			<div class="back-btn">
				<Button href="/">Home</Button>
			</div>
			<CardTitle>Participants Assignments</CardTitle>
		</CardHeader>

		<CardBody>
			<div class="container">
				<div class="list">
					<ListGroup>
						{#each $participants as participant}
							<ListGroupItem>
								{`${participant.firstName} ${participant.lastName}`}
							</ListGroupItem>
						{/each}
					</ListGroup>
				</div>
				<div class="list">
					<ListGroup>
						{#each shuffledList as shuffledParticipant}
							<ListGroupItem>
								{`${shuffledParticipant.firstName} ${shuffledParticipant.lastName}`}
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
	.back-btn {
		float: right;
	}
	.container {
		display: flex;
		gap: 0 50px;
		padding: 0;
	}
	.list {
		flex-grow: 1;
	}
</style>
