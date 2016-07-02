import React, { PropTypes, Component } from 'react';
import { IndexLink } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export default class NavBar extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    return (
      <Navbar default fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/" className="navbar-brand">
              React Redux Isomorphic Starter
            </IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <IndexLinkContainer to="/" className="text-uppercase">
              <NavItem eventKey={1}>
                Home
              </NavItem>
            </IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
