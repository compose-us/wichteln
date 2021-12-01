<script lang="ts">
	import {
		Button,
		Card,
		CardBody,
		CardFooter,
		CardTitle,
		Form,
		FormGroup,
		Input,
		Label
	} from 'sveltestrap';
	import { formSerializer } from '$lib/util/form-serializer';
	import ParticipantList from '$lib/components/participant-list.svelte';
	import { Participant, participants } from '$lib/stores/participants-store';
	import { demoParticipants } from '$lib/demo-participants';
	import { goto } from '$app/navigation';
	import CardLabel from '$lib/components/card-label.svelte';

	let firstName = '';
	let lastName = '';

	let firstNameRef = null;
	let lastNameRef = null;

	let firstNameValue = '';
	let lastNameValue = '';

	$: submitDisabled = firstNameValue === '' && lastNameValue === '';

	const submitHandler = (e) => {
		e.preventDefault();
		const formData = formSerializer(e.target);
		if (formData.firstName && formData.lastName) {
			$participants = [...$participants, formData as Participant];
			firstName = '';
			lastName = '';
		}
		firstNameRef.focus();
		firstNameValue = '';
		lastNameValue = '';
	};

	const loadDemoParticipants = () => {
		$participants = [...demoParticipants.map((a) => ({ ...a }))];
	};
</script>

<Card>
	<CardLabel label="Teilnehmer Formular" />

	<CardBody>
		{#if $participants.length === 0}
			<div class="loader">
				<Button color="success" on:click={loadDemoParticipants}>Lade Beispielteilnehmer</Button>
			</div>
		{:else}
			<ParticipantList list={$participants} editable={true} />
		{/if}
		<hr />

		<Form on:submit={submitHandler}>
			<FormGroup>
				<CardTitle>Teilnehmer hinzufügen</CardTitle>
				<Label>
					Vorname
					<Input
						type="text"
						name="firstName"
						bind:inner={firstNameRef}
						bind:value={firstName}
						on:keyup={({ key, target }) => {
							if (
								key !== ' ' &&
								key != 'Tab' &&
								key != 'Control' &&
								key != 'Shift' &&
								key != 'Enter'
							) {
								firstNameValue += key;
							}
							if (key === 'Backspace' && target['value'] === '') {
								firstNameValue = '';
							}
							if (key === ' ') {
								lastNameRef.focus();
							}
						}}
						on:change={(e) => console.log(e)}
						autofocus
					/>
				</Label>
				<Label>
					Nachname
					<Input
						type="text"
						name="lastName"
						bind:inner={lastNameRef}
						bind:value={lastName}
						on:keyup={({ key, target }) => {
							if (
								key !== ' ' &&
								key != 'Tab' &&
								key != 'Control' &&
								key != 'Shift' &&
								key != 'Enter'
							) {
								lastNameValue += key;
							}
							if (key === 'Backspace' && target['value'] === '') {
								lastNameValue = '';
							}
						}}
					/>
				</Label>
				<Button type="submit" color="success" disabled={submitDisabled}>Eintragen</Button>
			</FormGroup>
		</Form>
	</CardBody>

	<CardFooter>
		<Button
			color="success"
			on:click={() => goto('/participants-assignments')}
			block
			disabled={$participants.length === 0}>Shuffle</Button
		>
	</CardFooter>
</Card>

<style>
	.loader {
		text-align: center;
	}
</style>
