<script lang="ts">
	import { onMount } from 'svelte';
	import { Alert, Card, CardBody, CardFooter, ListGroup, ListGroupItem } from 'sveltestrap';
	import { randomizeParticipants } from '$lib/util/shuffle-participants';
	import { Participant, participants } from '$lib/stores/participants-store';
	import { validateShuffle } from '$lib/util/validate-shuffle';
	import CardLabel from '$lib/components/card-label.svelte';
	import { createLink } from '$lib/util/create-link';

	let pageReady = false;
	let showAlert = false;
	let shuffledList: Participant[] = [];

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

	const copyLink = (index: number, assignment: Participant) => {
		const link = createLink(document.location.origin, {
			participant: $participants[index],
			assignment
		});
		navigator.clipboard.writeText(link);
		showAlert = true;
		$participants[index].copied = true;
		setTimeout(() => {
			showAlert = false;
		}, 1000);
	};

	validateList();
</script>

{#if pageReady}
	<Card>
		<CardLabel label="Teilnehmer Links" backBtn={true} />

		<CardBody>
			<div class="container">
				<div class="list">
					<ListGroup>
						{#each $participants as participant, index}
							<ListGroupItem
								action
								href="#"
								color={participant.copied ? 'success' : 'light'}
								on:click={() => copyLink(index, shuffledList[index])}
							>
								{`${participant.firstName} ${participant.lastName}`}
							</ListGroupItem>
						{/each}
					</ListGroup>
				</div>
			</div>
		</CardBody>

		<CardFooter />
	</Card>
{/if}
<div class="alert">
	<div class="alert-content">
		<Alert isOpen={showAlert} fade={true}>Kopiert!</Alert>
	</div>
</div>

<style>
	.container {
		display: flex;
		gap: 0 50px;
		padding: 0;
	}
	.list {
		flex-grow: 1;
	}
	.alert {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	.alert-content {
		width: 50%;
		margin: 0 auto;
	}
</style>
