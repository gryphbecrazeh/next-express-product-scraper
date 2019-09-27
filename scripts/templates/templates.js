// Import Prototypes to construct a product object with all text fields filled in
// Need to map through all keys, pass identified content to prototypes

// Pass Sentences
import ShortDescription from "./ShortDescription";
// Pass Sku, Brand, Sentences and Bullets
import LongDescription from "./LongDescription";
// Pass Sku, Brand, Sentences and Short Text
import MetaDescription from "./MetaDescription";
// Pass Bullets
import BulletDescription from "./BulletDescription";
// Pass Sku, Brand, and Short Text
import ProductName from "./ProductName";
// Pass Sku, Brand, and Short Text
import MetaTitle from "./MetaTitle";

import KEYS from "../keys/keys";

export default function ContentConstructor({ brand, sku, content }) {
	this.ready = false;
	// Initialize the Output object
	let output = {
		...arguments[0],
		sentences: [],
		bullets: [],
		shortText: []
	};
	// If the content field isn't filled in
	if (!content) {
		this.alert = "Please Fill in Content Field...";
		return this;
	}
	// Analyze the content
	let matches = KEYS.filter(key => {
		return content.match(new RegExp(key.key, "gmi"));
	});
	// If there are no matches
	if (matches.length === 0) {
		this.alert = "No Matches Found...";
		return this;
	}
	this.ready = true;
	matches.forEach(key => {
		let outputKeys = Object.keys(output);
		outputKeys.forEach(outputKey => {
			output[outputKey].push(key[outputKey] || "");
		});
	});

	// Append brand and sku to output for fields
	output = {
		...output,
		brand: brand,
		sku: sku
	};
	this.longDescription = LongDescription({ ...output });
}
