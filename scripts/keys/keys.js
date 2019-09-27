// Store keys to be referenced here, change to api call and store in mongo db in key collection
const KEYS = [
	{
		key: "template",
		active: false,
		// 2-3 Spaces Max To be used in Name and Title
		shortText: "Esse incididunt",
		// One Sentence Max, To be used in Bullet and Long Description
		bullets:
			"<li>Id do esse quis enim in qui id irure ea tempor proident reprehenderit enim.</li>",
		// One to Three Sentences Max, To be used in Short and Long Descriptions
		sentences:
			"Eu occaecat cupidatat consequat consectetur aute incididunt aliquip fugiat ipsum et mollit.",
		// All related values that would like to also trigger this content to be displayed
		related_keys: ["test", "placeholder", "dev", "multi-word text"],
		// If we should Highlight this feature, To be used in long description
		highlight: false
	}
];
export default KEYS;
