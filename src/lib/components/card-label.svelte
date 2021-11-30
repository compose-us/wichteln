<script lang="ts">
	import { Button, CardHeader, CardTitle } from 'sveltestrap';

	export let label: string;
	export let backBtn: boolean = true;
</script>

<CardHeader>
	{#if backBtn}
		<div class="back-btn">
			<Button color="danger" href="/">Home</Button>
		</div>
	{/if}
	<CardTitle>{label}</CardTitle>
</CardHeader>

<style>
	.back-btn {
		float: right;
	}
</style>
