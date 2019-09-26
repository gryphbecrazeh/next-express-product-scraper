// ---------------------------------------------------React
import React, { useState } from "react";
// ---------------------------------------------------Reactstrap
import {
	Container,
	Row,
	Col,
	Button,
	InputGroupAddon,
	InputGroup
} from "reactstrap";
// ---------------------------------------------------Components
import InputComponent from "../components/Input";
import OutputComponent from "../components/Output";

export default function ContentManipulator({}) {
	const [inputContent, updateInput] = useState("");
	const [outputContent, setOutput] = useState("");
	let handleUpdate = e => {
		updateInput(e.target.value);
	};
	let handleOutput = e => {
		setOutput(inputContent);
	};
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<InputGroup>
							<InputComponent update={handleUpdate} />
							<InputGroupAddon addonType="append">
								<Button color="primary" onClick={handleOutput}>
									Render
								</Button>
							</InputGroupAddon>
						</InputGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<OutputComponent output={outputContent} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
