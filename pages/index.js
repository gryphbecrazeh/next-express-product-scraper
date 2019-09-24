// ---------------------------------------------------React
import React from "react";
// ---------------------------------------------------Next
import Head from "next/head";
import Link from "next/link";
// ---------------------------------------------------Reactstrap
import { Container, Row, Col } from "reactstrap";
// Currently not working
// import "bootstrap/dist/css/bootstrap.css";
// ---------------------------------------------------Components
import Scraper from "../components/Scraper";
export default () => {
	return (
		<div>
			<Head>
				<title>Test App</title>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
					crossOrigin="anonymous"
				></link>
				<style jsx>
					{`
						* {
							margin: 0;
							padding: 0;
						}
					`}
				</style>
			</Head>
			<Container>
				<Row
					style={{
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
						width: "100%"
					}}
				>
					<Col>
						<Scraper />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
