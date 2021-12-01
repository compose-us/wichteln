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
			Kleine Anleitung:
			<br /><br />
			1. Trage als erstes die Teilnehmernamen ein.
			<br /><br />
			2. Kontrolliere, ob Du die Namen richtig geschrieben hast. Wenn Du einen Namen korrigieren willst,
			dann lösche Deinen Eintrag und schreibe den Namen neu.
			<br /><br />
			3. Wenn Du fertig bist, dann klicke auf den "Shuffle" - Button, um eine Link-Liste erstellen zu lassen.
			<br /><br />
			4. Klicke nacheinander auf jeden Namen, um den Link automatisch zu kopieren. Du kannst ihn dann in eine Email oder Slack etc. kopieren und an den passenden Teilnehmer verschicken.
			Du kannst auch ein neues Tab öffnen und den Link dort hinein kopieren. Probier es aus und teste, ob es funktioniert hat.
			<br /><br />
			Wenn Du einen Link kopiert hast, wird dieser grün in der Liste angezeigt, so dass Du Deinen Platz nicht verlierst.
			<br /><br />
			Aufgepasst! Aktualisiere die Seite nicht unterm Arbeiten, denn sonst sind Deine Eingaben weg und
			Du musst von vorne beginnen. Das liegt daran, dass wir keine Daten speichern.
			<br /><br />
			Wir hoffen, dass Ihr viel Spaß beim Wichteln habt!
		</p>
	</div>
	<p class="lead">
		<Button block size="lg" color="success" href="/participants-form">Los geht's</Button>
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
