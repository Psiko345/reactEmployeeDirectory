import React from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';

const Navbars = props => {


    return (
        <Navbar className="bg-blue justify-content-between">
            <Navbar.Brand href="#"> Employee Directory </Navbar.Brand>
            <Form inline>
                <FormControl
                    name="term"
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value={props.search}
                    onChange={props.onSearch}
                    id="term"
                />
            </Form>
        </Navbar>
    )
}

export default Navbars