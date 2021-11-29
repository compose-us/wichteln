<script lang="ts">
	import { participants } from '$lib/stores/participants-store';

	import { Button, Icon, ListGroup, ListGroupItem } from 'sveltestrap';

	export let list = [];
	export let editable = false;

	const removeParticipant = (index: number) => {
		const _participants = [...$participants];
		_participants.splice(index, 1);
		$participants = _participants;
	};
</script>

<ListGroup>
	{#each list as item, i}
		<ListGroupItem>
			{`${item.firstName} ${item.lastName}`}
			<span class="action">
				<Button on:click={() => removeParticipant(i)}
					>{#if editable}
						<Icon name="trash" />
					{/if}
				</Button>
			</span>
		</ListGroupItem>
	{/each}
</ListGroup>

<style>
	.action {
		float: right;
	}
</style>
