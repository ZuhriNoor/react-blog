import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './Form.css';

export default function AddForm() {
  return (
    <div>
      <Container>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Blog Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Blog Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Author Name</Form.Label>
            <Form.Control type="text" placeholder="Enter the Author's Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to Terms and Conditions" />
          </Form.Group>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
