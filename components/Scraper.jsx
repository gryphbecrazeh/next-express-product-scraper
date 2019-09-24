import React, { Component } from "react";
import { Button, InputGroup, Input, Form, FormGroup } from "reactstrap";
import axios from "axios";

class Scraper extends Component {
	state = {
		url: "",
		product: {}
	};
	scrape = e => {
		e.preventDefault();
		axios.post("/fetch", { target: this.state.url }).then(res => {
			let el = document.createElement("html");
			el.innerHTML = res.data.response;
			let body = el.querySelector("body");
			let overview = body.querySelector("div.widget-detail-overview");
			let details = Array.from(overview.querySelectorAll("dl"));
			let product = {};
			if (details) {
				details.forEach(detail => {
					let key = detail
						.querySelector("dt")
						.innerText.match(new RegExp(/[\w \d]+/), "gmi");
					let val = detail
						.querySelector("dd")
						.innerText.match(new RegExp(/[\w \d]+/), "gmi");

					product[key] = val;
				});
			}
			product.title = body.querySelector("h1.ma-title").innerText;
			// this.setState({ product: product }, () => console.log(this.state));
			console.log(product);
		});
	};
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		let { title } = this.state.product;
		return (
			<div>
				<Form>
					<FormGroup>
						<InputGroup>
							<Input
								type="text"
								placeholder="Enter web address here..."
								name="url"
								onChange={this.onChange}
							></Input>
							<Button type="button" onClick={this.scrape}>
								Test
							</Button>
						</InputGroup>
					</FormGroup>
				</Form>
				<div>{title ? title : ""}</div>
			</div>
		);
	}
}
export default Scraper;
