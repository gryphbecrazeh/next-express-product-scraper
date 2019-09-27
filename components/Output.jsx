// ---------------------------------------------------React
import React, { useState } from "react";
// ---------------------------------------------------Reactstrap
import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	Label,
	CardHeader
} from "reactstrap";

// ---------------------------------------------------Components
export default function OutputComponent({ output }) {
	return (
		<div>
			<Card style={{ boxShadow: "0 2px 5px black", color: "black" }}>
				<CardBody>
					<Container>
						<Row>
							<Col>{output.longDescription}</Col>
						</Row>
					</Container>
				</CardBody>
			</Card>
		</div>
	);
}
