import React, { useState } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

function Counter() {
	const [counter, setCounter] = useState(0);
	return (
		<Container fluid>
			<Row style={{ height: "100vh" }} className="d-flex align-items-center">
				<Col className="d-flex justify-content-center">
					<Row>
						<Col>
							<Button
								onClick={() => {
									setCounter((prevCount) => prevCount + 1);
								}}
							>
								increment
							</Button>
						</Col>
						<Col>{counter}</Col>
					</Row>
				</Col>
				<Row>
					<Col className="d-flex justify-content-center">
						<Button
							variant="success"
							onClick={() => {
								window.ReactNativeWebView?.postMessage(counter);
							}}
						>
							Back To AppLication
						</Button>
					</Col>
				</Row>
			</Row>
		</Container>
	);
}

export default Counter;
