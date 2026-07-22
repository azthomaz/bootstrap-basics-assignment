// src/components/RegForm.js

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const RegForm = () => {
  const sampleUsers = [
    { id: 1, firstName: 'Hayley', lastName: 'Williams', email: 'hayley.williams@example.com', password: '••••••••' },
    { id: 2, firstName: 'Adele', lastName: 'Adkins', email: 'adele@example.com', password: '••••••••' },
    { id: 3, firstName: 'Beyoncé', lastName: 'Knowles', email: 'beyonce@example.com', password: '••••••••' },
  ];

  return (
    <div className="registration-form">
      <div className="full-width-image-section no-padding-bottom spacing-after-hero">
        <img
          src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=80"
          alt="Concert crowd enjoying a live music performance"
          className="img-fluid w-100 rounded-3 music-hero-image"
        />
        <div className="text-center spacing-above-avatar">
          <img
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80"
            alt="Musician performing on stage"
            className="img-fluid rounded-circle music-avatar"
          />
        </div>
      </div>

      <Form className="needs-validation" noValidate>
        <Row className="form-row-spacing">
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="form-field-spacing" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="form-field-spacing" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" required />
        </Form.Group>

        <Form.Group className="form-field-spacing" controlId="terms">
          <Form.Check type="checkbox" label="I agree to the terms and conditions" />
        </Form.Group>

        <div className="button-row spacing-above-actions">
          <Button variant="success" type="submit" className="btn-sm">
            Submit
          </Button>
          <Button variant="outline-secondary" type="button" className="desktop-only-button small-button">
            Learn More
          </Button>
        </div>
      </Form>

      <div className="table-section-spacing table-responsive">
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {sampleUsers.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.email}</td>
                <td>{person.password}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RegForm;