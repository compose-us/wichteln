<script>
	import Footer from '$lib/components/footer.svelte';
	import { Styles } from 'sveltestrap';
	import { Col, Container, Row } from 'sveltestrap';
</script>

<Styles />
<Container>
	<Row>
		<Col>
			<br />
			<slot />
		</Col>
	</Row>
</Container>
<Footer />
