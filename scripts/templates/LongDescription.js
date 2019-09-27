export default function LongDescription({ sentences, bullets, brand, sku }) {
	let description = `
        ${
					brand && sku
						? `            <p>This ${brand} ${sku} is an Oven with</p>
`
						: ""
				}
            <p>${String([...sentences])}</p>
            <strong>STANDARD FEATURES</strong>
            <br />
            <ul class="disc">${String([...bullets])}</ul>
    `;

	return description;
}

/*

<p>This Spaceman product is a Frozen Beverage Machine w/ (2) 15.9 qt Flavor Hopper, 208-230v, 1ph.</p>
<p><strong>Overview:</strong></p>
<p>Paragraph Description Goes Here</p>
<p><strong>Margaritum Machine Details:</strong></p>
<p>All Bullet List Goes Here</p>
<p>What you'll be getting from this Spaceman product is a Margaritum Machine, 21.80 inch from left to right, Margarita Machine Product, 116 servings/hr Output, 116 Servings/hr, 2 Number of Hoppers, ETL Approved.</p>
<p><strong>Product Dimensions:</strong></p>
<ul class="bullet">
<li>Left to Right: 21.80 in.</li>
<li>Front to Back: 25.70 in.</li>
<li>Height: 57.80 in.</li>
</ul>
<p><strong>Spaceman Warranty: </strong></p>
<p>See spec sheet or call <a href="tel:+19175252066">917-525-2066</a> for more details or assistance.</p>





*Product Submisson "Features Highlights" Template*

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>

<b>Long Description Highlight 1</b><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>

<b>Long Description Highlight 2</b><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>

<b>Long Description Highlight 3</b><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>

<b>Long Description Highlight 4</b><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>

<b>Long Description Highlight 5</b><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br>

<b>Long Description Highlight 6</b><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br><br></p>



*Barbone Template*
(Sentence Casing)
<strong>STANDARD FEATURES</strong><br>
<ul class="disc">
<li>Product Feature 1</li>
<li>Product Feature 2</li>
<li>Product Feature 3</li>
<li>Product Feature 4</li>
<li>Product Feature 5</li>
<li>Product Feature 6</li>
<li>Product Feature 7</li>
<li>Product Feature 8</li>
<li>Product Feature 9</li>
<li>Product Feature 10</li>
<li>Product Feature 11</li>
</ul>

*/
