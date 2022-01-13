<script lang="ts">
	import { onMount } from 'svelte';
	import { Collapse } from 'sveltestrap';
	import { decode } from '$lib/util/encode-decode';

	export let secret: string;
	export let reveal = false;

	let decodedSecret: string;

	onMount(() => {
		decodedSecret = decode(secret);
	});
</script>

<Collapse isOpen={reveal}>
	<h1>{decodedSecret}</h1>
</Collapse>
