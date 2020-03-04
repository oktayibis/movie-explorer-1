import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";

export default class HeaderNavBar extends Component {
    render() {
        return (
            <Navbar  expand="lg" variant="dark" bg="info">
            <Navbar.Brand href="#">The Movie Database</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
            </Navbar>
        )
    }
}
