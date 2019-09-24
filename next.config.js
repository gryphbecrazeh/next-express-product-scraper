const withCSS = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
const withSass = require("@zeit/next-sass");
module.exports = withLess(
	withCSS(
		withSass({
			webpack(config, options) {
				config.module.rules = [
					...config.module.rules,
					{
						test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
						use: {
							loader: "url-loader",
							options: {
								limit: 100000
							}
						}
					},
					{
						test: /\.(css|min.css)$/,
						use: ["style-loader", "css-loader"]
					}
				];
				return config;
			}
		})
	)
);
