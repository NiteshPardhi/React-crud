import { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CreateUpdateEmployees() {
    //for get employee ID with route
    const param = useParams();
    console.log(param)

    //for get data from localstorage
    let  Data = JSON.parse(localStorage.getItem("empData"));

    //filter data with id
    let  selectedData = [];
    let submitedData = [];
    if(Data){
        submitedData = [...Data];
        selectedData = Data.filter((item) => item.id == param.id);
    }

    //for handle the input value
    const [values, setValues] = useState({
        firstName: param.id ? selectedData[0].firstName : '',
        lastName: param.id ? selectedData[0].lastName : '',
        age: param.id ? selectedData[0].age : '',
        contact_no: param.id ? selectedData[0].contact_no : '',
        id: param.id ? selectedData[0].id : '',
        email: param.id ? selectedData[0].email : '',
        city: param.id ? selectedData[0].city : '',
        state: param.id ? selectedData[0].state : '',
        address: param.id ? selectedData[0].address : ''
    })
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: [e.target.value] });
    };

    //for reset form data
    const resetForm = () => {
        setValues({
            firstName: "",
            lastName: "",
            age: "",
            contact_no: "",
            id: "",
            email: "",
            city: "",
            state: "",
            address: "",
        });
    };

    //uset this for navigate programatically
    const navigate = useNavigate();

    //for set required validations on react bootstrap form
    //Note- if u not use react-bootstrap then u can directly use required validator in html tag
    const [validated, setValidated] = useState(false);

    //For Submit form data
    const handleForm = (e) => {
        // console.log(values);

        const form = e.currentTarget;
        if (form.checkValidity() == false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        
        if(param.id){
            let ind = Data.findIndex((item) => item.id == param.id);
            submitedData[ind] = {
                firstName: values.firstName ? values.firstName : values.firstName[0],
                lastName: values.lastName ? values.lastName : values.lastName[0],
                age: values.age ? values.age : values.age[0], 
                contact_no: values.contact_no ? values.contact_no : values.contact_no[0],
                id: values.id ? values.id: values.id[0],
                email: values.email ? values.email : values.email[0],
                city: values.city ? values.city : values.city[0],
                state: values.state ? values.state : values.state[0],
                address: values.address ? values.address : values.address[0]
            }

            // for set data to the localStorage
            localStorage.setItem('empData', JSON.stringify(submitedData));
            alert('Employee Data update successfull');
            navigate("/");

        }else{
            submitedData.push({
                firstName: values.firstName[0],
                lastName: values.lastName[0],
                age: values.age[0], 
                contact_no: values.contact_no[0],
                id: values.id[0],
                city: values.city[0],
                state: values.state[0],
                address: values.address[0]
            })
            // for set data to the localStorage
            localStorage.setItem('empData', JSON.stringify(submitedData));
            alert('Employee Data added successfull');
            navigate("/");
        }

    };

    return (
        <div className="container">
            <div className="header">
                <h3 className="heading">
                    {param.id ? "Update Employee" : "Create Employee"}
                </h3>
            </div>

            <div className="create_form">
                <Form validated={validated} onSubmit={handleForm}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="fname">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter First Name"
                                name="firstName"
                                value={values.firstName}
                                onChange={(e) => handleChanges(e)}
                                required
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="lname">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Last Name"
                                name="lastName"
                                value={values.lastName}
                                onChange={(e) => handleChanges(e)}
                                required
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                value={values.email}
                                onChange={(e) => handleChanges(e)}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="age">
                            <Form.Label>Age:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Age"
                                name="age"
                                value={values.age}
                                onChange={(e) => handleChanges(e)}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="contact_no">
                            <Form.Label>Contact Number:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Contact NUmber"
                                name="contact_no"
                                value={values.contact_no}
                                onChange={(e) => handleChanges(e)}
                                required
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="id">
                            <Form.Label>Employee ID</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Employee ID"
                                name="id"
                                value={values.id}
                                onChange={(e) => handleChanges(e)}
                                required
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Address"
                                name="address"
                                value={values.address}
                                onChange={(e) => handleChanges(e)}
                                required
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter City"
                                name="city"
                                value={values.city}
                                onChange={(e) => handleChanges(e)}
                                required
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Select
                                defaultValue="Choose..."
                                name="state"
                                value={values.state}
                                onChange={(e) => handleChanges(e)}
                            >
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
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={handleForm}
                    >
                        Submit
                    </button>
                    {/* <Button type="submit">Submit</Button> */}
                    <button className="btn btn-danger mx-2" onClick={resetForm}>
                        Reset
                    </button>
                    <Link to={"/"} className="btn btn-secondary">
                        Go Back
                    </Link>
                </div>
            </div>
        </div>
    );
}
