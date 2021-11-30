<script lang="ts">
	import { onMount } from 'svelte';

	export let secret: string;
	export let reveal = false;

	let decodedSecret: string;

	onMount(() => {
		decodedSecret = atob(secret);
	});
</script>

{#if reveal}
	You're assigned to: <br />
	<h1>{decodedSecret}</h1>
{/if}
