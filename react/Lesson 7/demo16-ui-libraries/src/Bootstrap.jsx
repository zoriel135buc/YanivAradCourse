// https://react-bootstrap.netlify.app/docs/getting-started/introduction
// npm install react-bootstrap bootstrap

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Button from 'react-bootstrap/Button';

const Bootstrap = () => {
  return (
    <>
      {/* Form.Group - wraps a form control with proper spacing, along with support for a label, help text, and validation state */}
      {/* Form.Control - renders the <input> */}
      {/* Form.Check - For the non-textual checkbox, switch and radio controls */}
      {/* Wrap a <Form.Control> element in <FloatingLabel> to enable floating labels with Bootstrap’s textual form fields */}

      <Form className='mb-2'>
        <Container>
          <Row>
            <Form.Group
              as={Col}
              className='mt-3 mb-3'
              controlId='formBasicEmail'
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                Make sure to use the right e-mail.
              </Form.Text>
            </Form.Group>
            <FloatingLabel
              as={Col}
              className='mt-3 mb-3'
              controlId='floatingPassword'
              label='Password'
            >
              <Form.Control type='password' placeholder='Password' />
            </FloatingLabel>
          </Row>
          <Row>
            <Form.Group as={Col} className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Check type='switch' label='Check this switch' />
            </Form.Group>
          </Row>
          <Button variant='secondary' type='submit'>
            Submit
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default Bootstrap;
