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
			<img src="/SantaClaus.svg" alt="Santa Claus" />
			Get started by entering the names of your participants.
			<br /><br />
			Make sure you spell their names correctly. If you need to make a correction. Just delete the entry
			and add it again.
			<br /><br />
			When you are ready, click on the "shuffle" button to render a list of links.
			<br /><br />
			Click on each name, one by one, to copy the link that you should send the corresponding participant.
			<br /><br />
			As you copy each link the list item will turn green. So you will not loose your place.
			<br /><br />
			Just becareful to not refresh the page. You will lose your work and will have to start all over
			again.
			<br /><br />
			We hope you have fun with your Wichteln party.
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

	@media only screen and (max-width: 600px) {
		img {
			max-width: 180px;
		}
	}
</style>
