import React, { useState } from "react";
import { Button, InputGroup, Input, InputGroupAddon } from "reactstrap";
import axios from "axios";

export default function Scraper({ handler }) {
	let [url, setUrl] = useState(null);
	let [product, updateProduct] = useState({});
	const scrape = e => {
		e.preventDefault();
		axios.post("/fetch", { target: url }).then(res => {
			const parser = new DOMParser();
			let htmlDoc = parser.parseFromString(res.data.response, "text/html");
			let body = htmlDoc.querySelector("body");
			let title = body.querySelector(".product-name");

			console.log(htmlDoc);
			console.log(title.innerText);
			updateProduct({ ...product, title: title });
			handler({ product, content: body });
		});
	};
	const onChange = e => {
		setUrl(e.target.value);
	};
	return (
		<div style={{ width: "80vw" }}>
			<InputGroup>
				<Input
					type="text"
					placeholder="Enter web address here..."
					name="url"
					onChange={onChange}
				></Input>
				<InputGroupAddon addonType="append">
					<Button color="primary" type="button" onClick={scrape}>
						Scrape
					</Button>
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}

/*
// Alibaba Config
			let body = el.querySelector("body");
			let overview = body.querySelector("div.widget-detail-overview");
			if (!overview) return null;
			if (overview.querySelectorAll("dl")) {
				let details = Array.from(overview.querySelectorAll("dl"));
				let newProduct = {};
				if (details) {
					details.forEach(detail => {
						let key = detail
							.querySelector("dt")
							.innerText.match(new RegExp(/[\w \d]+/), "gmi")
							.toString()
							.replace(/ +/gim, " ")
							.replace(/^ /gim, "");
						let val = detail
							.querySelector("dd")
							.innerText.match(new RegExp(/[\w \d]+/), "gmi")
							.toString()
							.replace(/ +/gim, " ")
							.replace(/^ /gim, "");
						product[key] = val;
						updateProduct({ ...newProduct, ...product });
					});
				}
			}
			let title = body.querySelector("h1.ma-title").innerText;
*/
