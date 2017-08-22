import React, { Component } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';

class EditMapTimeCategory extends Component {
  constructor() {
    super();
    this.state = { isDeleteDisabled: true };
  }

  userInputForDelete(e) {
    const userInput = e.target.value;
    const category = this.props.categoryName;
    if(userInput === category) this.setState({ isDeleteDisabled: false });
    else this.setState({ isDeleteDisabled: true });
  }

  render() {
    return (
      <Modal show={true}>
          <Modal.Header>
            <Modal.Title>Edit category</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className='input-group'>
              <FormControl
                type="text"
                placeholder="Enter a new name for this category"
              />
              <span className='input-group-btn'>
                <Button bsStyle='primary'>Submit</Button>
              </span>
            </div>
            <hr />
            <div className='input-group'>
              <FormControl
                type="text"
                placeholder="Enter the current name of the category to enable deletion"
                onChange={this.userInputForDelete.bind(this)}
              />
              <span className='input-group-btn'>
                <Button bsStyle='danger' disabled={this.state.isDeleteDisabled}>Delete</Button>
              </span>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.toggleShow}>Close</Button>
          </Modal.Footer>

        </Modal>
    )
  }
}

export default EditMapTimeCategory;