import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function Header({ currentUser, toggleCart }) {
  return (
    <Container expand="md">
      <Navbar sticky="top" collapseOnSelect expand="sm" className="navbar">
        <Navbar.Brand>
          <Link className="logo-container" to="/">
            <Logo className="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav fill className=" navbar__nav ml-auto">
            <Nav.Item className="navbar__item">
              <Link to="/shop">Shop</Link>
            </Nav.Item>
            <Nav.Item className="navbar__item">
              <Link to="/contact">Contact</Link>
            </Nav.Item>
            {currentUser ? (
              <Nav.Item onClick={() => auth.signOut()} className="navbar__item">
                Sign Out
              </Nav.Item>
            ) : (
              <Nav.Item className="navbar__item">
                <Link to="/signin">Sign In</Link>
              </Nav.Item>
            )}
            <Nav.Item className="navbar__item">
              <CartIcon />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        {toggleCart ? null : <CartDropdown />}
      </Navbar>
    </Container>
  );
}

const mapStateToProps = ({ user, toggleCart }) => ({
  currentUser: user.currentUser,
  toggleCart: toggleCart.hidden,
});

export default connect(mapStateToProps)(Header);
