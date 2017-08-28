import React, { Component } from 'react';
import { Navbar, MenuItem, NavDropdown, Nav, NavItem, Modal, Button, FormControl } from 'react-bootstrap';
import { connect } from "react-redux";
import { createNewMapping, getMappings, setCurrentMapping } from '../actions/mapTime';

class MenuBar extends Component {

  constructor() {
    super();
    this.state = {"showModal": false, "newMappingName": ""};
  }

  componentDidMount() {
    this.props.getMappings();
  }

  submitNewMapping() {
    this.closeModal();
    this.props.createNewMapping(this.state.newMappingName)
  }

  handleNewMappingInputChange = (e) => this.setState({ newMappingName: e.target.value });

  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  chooseMapping(mapping) {
    this.props.setCurrentMapping(mapping);
  }

  render() { 
    const style = {
      navbar: {
        borderRadius: '0px',
        margin: '0px'
      }
    };

    const mappings = (this.props && this.props.mapTime.mappings) ? this.props.mapTime.mappings : [];
    const listOfMappings = mappings.map((mapping, i) => 
      <MenuItem 
        key={i}
        onClick={this.chooseMapping.bind(this, mapping)}
       >{mapping.name}</MenuItem>);

    return (
      <div>
        <Navbar style={style.navbar}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Record</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={1} title="Map time" id="basic-nav-dropdown" className={this.props.app.mapTimeVisible ? "active" : ""}>
              {listOfMappings}
              <MenuItem divider />
              <MenuItem eventKey={1.4} onClick={this.openModal.bind(this)}>Create new mapping</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#">Medical</NavItem>
            <NavItem eventKey={2} href="#">Journal</NavItem>
            <NavItem eventKey={2} href="#">Periodisation</NavItem>
          </Nav>
        </Navbar>

        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Create a new mapping</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={this.submitNewMapping.bind(this)}>
              <FormControl
                type="text"
                value={this.state.newMappingName}
                placeholder="Enter a name for the new mapping"
                onChange={this.handleNewMappingInputChange.bind(this)}
              />
            </form>
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

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  createNewMapping,
  getMappings,
  setCurrentMapping
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
