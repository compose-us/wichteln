<script lang="ts">
	import { Button, Jumbotron } from 'sveltestrap';
	import { participants } from '$lib/stores/participants-store';

	$participants = [];
</script>

<Jumbotron>
	<h1 class="display-3">WICHTELN (Secret Santa)</h1>
	<!-- <p class="lead">
		This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to
		featured content or information.
	</p> -->
	<hr class="my-2" />
	<p>Get started by entering your participants names</p>
	<p class="lead">
		<Button color="primary" href="/participants-form">Let's Begin</Button>
	</p>
</Jumbotron>
