import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";

function Home() {
	return (
		<Container fluid>
			<Row style={{ height: "100vh" }} className="d-flex align-items-center">
				<Col className="d-flex justify-content-center">
					<Link to="/counter">
						<Button>Go To Counter</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
