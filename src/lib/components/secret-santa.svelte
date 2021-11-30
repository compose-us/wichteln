<script lang="ts">
	import { onMount } from 'svelte';
	import { Collapse } from 'sveltestrap';

	export let secret: string;
	export let reveal = false;

	let decodedSecret: string;

	onMount(() => {
		decodedSecret = atob(secret);
	});
</script>

<Collapse isOpen={reveal}>
	<h1>{decodedSecret}</h1>
</Collapse>
