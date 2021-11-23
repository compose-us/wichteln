<script lang="ts">
	export let list = [];
</script>

<ul>
	{#each list as item}
		<li>{`${item.firstName} ${item.lastName}`}</li>
	{/each}
</ul>
