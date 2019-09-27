// ---------------------------------------------------React
import React, { useState } from "react";
// ---------------------------------------------------Reactstrap
import {
	Input,
	Form,
	FormGroup,
	Container,
	Row,
	Col,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter
} from "reactstrap";
import { relative } from "path";
// ---------------------------------------------------Components

export default function InputComponent({ update, submit }) {
	return (
		<Card
			// className="text-black-50"
			body
			inverse
			style={{
				backgroundColor: "#55a",
				borderColor: "#55a",
				position: "relative",
				zIndex: 2,
				boxShadow: "0 2px 5px black"
			}}
		>
			<CardBody>
				<Container>
					<FormGroup>
						<Row>
							<Col>
								<Input
									type="text"
									name="brand"
									placeholder="Input Brand here..."
									onChange={update}
								></Input>
							</Col>
							<Col>
								<Input
									type="text"
									name="sku"
									onChange={update}
									placeholder="Input Sku here..."
								></Input>
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row>
							<Col>
								<Input
									type="textarea"
									name="content"
									style={{ minHeight: "5em" }}
									placeholder="Input text here..."
									onChange={update}
								></Input>
							</Col>
						</Row>
					</FormGroup>
					<Row>
						<Col>
							<Button color="primary" onClick={submit} block>
								Generate Content
							</Button>
						</Col>
					</Row>
				</Container>
			</CardBody>
		</Card>
	);
}
