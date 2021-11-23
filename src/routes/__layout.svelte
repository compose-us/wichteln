<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { Column, Container, Row } from 'sveltestrap';
</script>

<Container>
	<Row>
		<Column>
			<br />
			<slot />
		</Column>
	</Row>
</Container>
