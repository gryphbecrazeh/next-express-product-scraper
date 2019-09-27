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
export default function ContentManipulator({ scrapedContent }) {
	const [inputContent, updateInput] = useState({
		brand: null,
		sku: null,
		content: null
	});
	const [outputContent, setOutput] = useState("");
	const [alerts, setAlert] = useState(null);
	let handleAlert = alert => {
		setAlert(alert);
	};
	let handleUpdate = e => {
		updateInput({ ...inputContent, [e.target.name]: e.target.value });
	};
	let handleOutput = () => {
		let output = new ContentConstructor(inputContent);
		let { ready, alert } = output;
		if (ready) {
			setOutput(output);
			console.log(output.longDescription);
			setAlert({ alert: "Successfully Generated Content...", success: true });
		} else {
			handleAlert({ alert: alert, success: false });
		}
	};
	return (
		<Container>
			<Row>
				<Col>
					<InputComponent
						alert={alerts}
						update={handleUpdate}
						submit={handleOutput}
						scrape={scrapedContent}
					/>
				</Col>
			</Row>
			{!outputContent ? (
				""
			) : (
				<Row className="mt-5">
					<Col>
						<OutputComponent output={outputContent} />
					</Col>
				</Row>
			)}
		</Container>
	);
}
