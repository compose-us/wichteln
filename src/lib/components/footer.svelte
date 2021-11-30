<script lang="ts">
	import { Col, Container, Row } from 'sveltestrap';
</script>

<Container>
	<Row>
		<Col>
			<div class="root">
				developed by{' '}
				<a href="https://compose.us" rel="noreferrer noopener" target="_blank"> compose.us </a>
			</div>
		</Col>
	</Row>
</Container>

<style>
	.root {
		background-color: white;
		background: rgba(255, 255, 255, 0.8);
		padding: 15px;
		margin-top: 8px;
		border-radius: 5px;
		text-align: center;
	}
</style>
