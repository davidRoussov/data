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

  deleteCategory(e) {
    e.preventDefault();
    if(!this.state.isDeleteDisabled) {
      this.props.delete();
    }
  }

  render() {
    return (
      <Modal show={true}>
          <Modal.Header>
            <Modal.Title>Edit <strong>{this.props.categoryName}</strong></Modal.Title>
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
            <form onSubmit={this.deleteCategory.bind(this)} className='input-group'>
              <FormControl
                type="text"
                className='form-control'
                placeholder="Enter the current name of the category to enable deletion"
                onChange={this.userInputForDelete.bind(this)}
              />
              <span className='input-group-btn'>
                <Button type='submit' bsStyle='danger' disabled={this.state.isDeleteDisabled}>Delete</Button>
              </span>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.toggleShow}>Close</Button>
          </Modal.Footer>

        </Modal>
    )
  }
}

export default EditMapTimeCategory;