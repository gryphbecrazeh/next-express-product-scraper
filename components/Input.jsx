// ---------------------------------------------------React
import React, { useState } from "react";
// ---------------------------------------------------Reactstrap
import { Input } from "reactstrap";
// ---------------------------------------------------Components

export default function InputComponent({ update }) {
	return (
		<Input
			type="textarea"
			style={{ minHeight: "5em" }}
			placeholder="Input text here..."
			onChange={update}
		></Input>
	);
}
