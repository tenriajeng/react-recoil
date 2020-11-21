import React, { useState } from "react";
import { Card, CardGroup, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { kelasState } from "../Store/KelasState";

function HomeReact() {
	const { kelas } = useRecoilValue(kelasState);
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	console.log("valuenya kelas state :", kelas);

	const styleRow = { marginTop: 55 };
	return (
		<div>
			<Carousel style={{ paddingTop: 55 }} activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item>
					<img className="d-block w-100" src="http://placekitten.com/700/300" alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="http://placekitten.com/g/700/300" alt="Second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src="http://placekitten.com/700/300" alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Container>
				<Row style={styleRow}>
					{kelas.map((name, index) => {
						return (
							<Col xs={6} md={4} style={{ paddingTop: 35 }}>
								<Card>
									<Card.Body>
										<Card.Text>{name.nama}</Card.Text>
										<Card.Text>{name.updated_at}</Card.Text>
									</Card.Body>
									<Card.Img variant="bottom" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/9.jpg" />
								</Card>
							</Col>
							// <Col xs={6} md={4} style={{ paddingTop: 35 }}>
							// 	<div className="card promoting-card">
							// 		{/* Card image */}
							// 		<div className="view overlay">
							// 			<img className="card-img-top rounded-0" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/4.jpg" alt="Card image cap" />
							// 			<a href="#!">
							// 				<div className="mask rgba-white-slight" />
							// 			</a>
							// 		</div>
							// 		{/* Card content */}
							// 		<div className="card-body">
							// 			<div className="collapse-content">
							// 				{/* Text */}
							// 				<p className="nav-item nav-link">
							// 					{name.nama}
							// 					<br />
							// 				</p>
							// 				{/* Button */}
							// 				<Card.Link data-toggle="collapse" to="/kelas" aria-expanded="false" aria-controls="collapseContent">
							// 					<NavLink style={{ color: "#f44336" }} className="nav-item nav-link" to="/kelas">
							// 						Read
							// 					</NavLink>
							// 				</Card.Link>
							// 			</div>
							// 		</div>
							// 	</div>
							// </Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
}

export default HomeReact;
