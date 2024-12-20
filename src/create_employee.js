import { Button } from "react-bootstrap";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function CreateEmployees() {
    //for handle the input value
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        age: '',
        contact_no: '',
        id: '',
        email: '',
        city: '',
        state: '',
        address: ''
    })
    const handleChanges = (e) => {
        // setValues({ ...values, [e.target.name]: [e.target.value] })
        setValues({...values, [e.target.name]: [e.target.value]})
    }

    //for reset form data
    const resetForm = () => {
        setValues({
            firstName: '',
            lastName: '',
            age: '',
            contact_no: '',
            id: '',
            email: '',
            city: '',
            state: '',
            address: ''
        })
    }

    //uset this for navigate programatically
    const navigate = useNavigate();

    //for set required validations on react bootstrap form
    //Note- if u not use react-bootstrap then u can directly use required validator in html tag
    const [validated, setValidated] = useState(false); 

    //For Submit form data
    const handleForm = (e) => {
        console.log(values);
        console.log(values.firstName[0]);
        // alert('Employee Data added successfull');
        // navigate("/");
        
        const form = e.currentTarget;
        if(form.checkValidity() == false){
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    }

    return (
        <div className="create_employee">
            <div className='header'>
                <h3 className='heading'>Create Employee</h3>
            </div>

            <div className="create_form">
                <Form  validated={validated} onSubmit={handleForm}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="fname">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" name="firstName"
                                value={values.firstName} onChange={(e) => handleChanges(e)} required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="lname">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" name="lastName"
                                value={values.lastName} onChange={(e) => handleChanges(e)} required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" name="email"
                                value={values.email} onChange={(e) => handleChanges(e)} required />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="id">
                            <Form.Label>Employee ID</Form.Label>
                            <Form.Control type="number" placeholder="Enter Employee ID" name="id"
                                value={values.id} onChange={(e) => handleChanges(e)} required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" name="address"
                                value={values.address} onChange={(e) => handleChanges(e)} required />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter City" name="city"
                                value={values.city} onChange={(e) => handleChanges(e)} required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose..." name="state" value={values.state} onChange={(e) => handleChanges(e)}>
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form>

                <div className="mt-5">
                    <button className="btn btn-primary" type="submit" onClick={handleForm}>Submit</button>
                    {/* <Button type="submit">Submit</Button> */}
                    <button className="btn btn-danger mx-2" onClick={resetForm}>Reset</button>
                    <Link to={'/'} className="btn btn-secondary">Go Back</Link>
                </div>
            </div>
        </div>

    )
}