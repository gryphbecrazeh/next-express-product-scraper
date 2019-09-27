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
// ---------------------------------------------------Scripts
import ContentConstructor from "../scripts/templates/templates";
export default function ContentManipulator({}) {
	const [inputContent, updateInput] = useState({
		brand: null,
		sku: null,
		content: null
	});
	const [outputContent, setOutput] = useState("");
	let handleUpdate = e => {
		updateInput({ ...inputContent, [e.target.name]: e.target.value });
	};
	let handleOutput = () => {
		let output = new ContentConstructor(inputContent);
		setOutput(output);
	};
	return (
		<Container>
			<Row>
				<Col>
					<InputComponent update={handleUpdate} submit={handleOutput} />
				</Col>
			</Row>
			{!outputContent ? (
				""
			) : (
				<Row>
					<Col>
						<OutputComponent output={outputContent} />
					</Col>
				</Row>
			)}
		</Container>
	);
}
