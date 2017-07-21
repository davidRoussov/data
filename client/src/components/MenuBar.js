import React, { Component } from 'react';
import { Navbar, MenuItem, NavDropdown, Nav, NavItem, Modal, Button, FormControl } from 'react-bootstrap';

class MenuBar extends Component {

  constructor() {
    super();
    this.state = {"showModal": false};
  }

  submitNewMapping() {
    console.log(this.state.newMappingName);
  }

  handleNewMappingInputChange = (e) => this.setState({ newMappingName: e.target.value });

  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  render() { 
    const style = {
      navbar: {
        borderRadius: '0px',
        margin: '0px'
      }
    };

    return (
      <div>
        <Navbar style={style.navbar}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Record</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={1} title="Map time" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>Action</MenuItem>
              <MenuItem eventKey={1.2}>Another action</MenuItem>
              <MenuItem eventKey={1.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1.4} onClick={this.openModal.bind(this)}>Create new mapping</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#">Medical</NavItem>
          </Nav>
        </Navbar>

        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Create a new mapping</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormControl
              type="text"
              value={this.state.newMappingName}
              placeholder="Enter a name for the new mapping"
              onChange={this.handleNewMappingInputChange.bind(this)}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.closeModal.bind(this)}>Close</Button>
            <Button bsStyle="primary" onClick={this.submitNewMapping.bind(this)}>Submit</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
}

export default MenuBar;
