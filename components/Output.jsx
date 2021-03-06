// ---------------------------------------------------React
import React, { useState } from "react";
// ---------------------------------------------------Reactstrap
import { Container, Row, Col } from "reactstrap";

// ---------------------------------------------------Components

export default function OutputComponent({ output }) {
	return (
		<Container>
			<Row>
				<Col>{output.ready ? output.getLongDescription() : null}</Col>
			</Row>
		</Container>
	);
}
