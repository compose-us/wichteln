<script lang="ts">
	import { Button, Form, FormGroup, Input, Label } from 'sveltestrap';
	import { formSerializer } from '$lib/form-serializer';
	import ParticipantList from '$lib/components/participant-list.svelte';
	import { Participant, participants } from '$lib/stores/participants-store';

	let firstName = '';
	let lastName = '';

	const submitHandler = (e) => {
		e.preventDefault();
		const formData = formSerializer(e.target);
		if (formData.firstName && formData.lastName) {
			$participants = [...$participants, formData as Participant];
			firstName = '';
			lastName = '';
		}
	};
</script>

<h1>Participants Form</h1>
<ParticipantList list={$participants} />
<Form on:submit={submitHandler}>
	<FormGroup>
		<Label>
			First Name
			<Input type="text" name="firstName" bind:value={firstName} autofocus />
		</Label>
		<Label>
			Last Name
			<Input type="text" name="lastName" bind:value={lastName} />
		</Label>
		<Button>Submit</Button>
	</FormGroup>
</Form>
<Button href="/sort-participants">Sort</Button>
