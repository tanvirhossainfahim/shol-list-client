import React, {useState} from 'react';
import { Modal, Button, Form, InputGroup, Row, Col  } from 'react-bootstrap';

const Update = ({show, onHide }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };


    return (
        <Modal
            show={show}
            onHide={onHide}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Update Shop</Modal.Title>
            </Modal.Header>
            <Modal.Body>



            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <input type="hidden" id="shop_id"/>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="shopName">
                        <Form.Label>Shop Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Shop Name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="Areaofshop">
                        <Form.Label>Area of shop</Form.Label>
                        <select className="form-control" required id="validationCustomUsername">
                            <option value="Thane">Thane</option>
                            <option value="Pune">Pune</option>
                            <option value="Mumbai Suburban">Mumbai Suburban</option>
                            <option value="Nashik">Nashik</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Ahmednagar">Ahmednagar</option>
                            <option value="Solapur">Solapur</option>
                        </select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                    <Form.Label>Shop category</Form.Label>
                        <InputGroup hasValidation>
                            <select className="form-control" required id="validationCustomUsername">
                                <option value="Grocery">Grocery</option>
                                <option value="Butcher">Butcher</option>
                                <option value="Baker">Baker</option>
                                <option value="Chemist">Chemist</option>
                                <option value="Stationery shop">Stationery shop</option>
                            </select>
                            <Form.Control.Feedback type="invalid">
                            Please choose a catagry.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>Opening Date</Form.Label>
                        <Form.Control type="date" placeholder="Opening Date" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Opening Date.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                        <Form.Label>Closing Date</Form.Label>
                        <Form.Control type="date" placeholder="Closing Date" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Closing Date.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="12" controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="file"/>
                    </Form.Group>
                </Row>
            </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Update;
