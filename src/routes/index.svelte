<script lang="ts">
	import { Button, Jumbotron } from 'sveltestrap';
	import { participants } from '$lib/stores/participants-store';

	$participants = [];
</script>

<Jumbotron>
	<h1 class="display-3">WICHTELN (Secret Santa)</h1>

	<hr class="my-2" />
	<div class="content">
		<p>
			<img src="/SantaClaus.svg" alt="Santa Claus" />Get started by entering your participants names
			<br />
			This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured
			content or information.
		</p>
	</div>
	<p class="lead">
		<Button block size="lg" color="success" href="/participants-form">Let's Begin</Button>
	</p>
</Jumbotron>

<style>
	.content {
		display: flex;
		flex-direction: column;
	}
	img {
		margin-bottom: 24px;
		text-overflow: clip;
		max-width: 500px;
		float: right;
	}
</style>
