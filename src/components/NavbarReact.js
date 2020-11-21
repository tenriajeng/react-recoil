import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authUser } from "../Store/Auth";

function NavbarReact() {
	const { user } = useRecoilValue(authUser);

	return (
		<div>
			<Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>
						<Link className="navbar-brand" to="/">
							React-Bootstrap
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link>
								<Link className="nav-item nav-link" to="/">
									Home
								</Link>
							</Nav.Link>
							<Nav.Link>
								<Link className="nav-item nav-link" to="/kelas">
									Kelas
								</Link>
							</Nav.Link>
						</Nav>
						<Nav>
							{user.name === "login dulu" ? (
								<Nav.Link>
									<Link className="nav-item nav-link" to="/login">
										Sign In
									</Link>
								</Nav.Link>
							) : (
								<NavDropdown menuAlign="left " className="nav-item nav-link" title={user.name} id="basic-nav-dropdown">
									<NavDropdown.Item>
										<Image width="100" fluid src="http://placekitten.com/100/100" roundedCircle />
									</NavDropdown.Item>
									<NavDropdown.Item>Another action</NavDropdown.Item>
									<NavDropdown.Item>Something</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item>Separated link</NavDropdown.Item>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavbarReact;
