import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployees() {
  //for get emp ID using param
  const param = useParams();

  //for get data from localstorage
  const allData = JSON.parse(localStorage.getItem("empData") || "{}");

  const filterData = allData.filter((item) => item.id == param.id);
  //console.log(filterData);

  return (
    <div className="">
      <div className="header">
        <h3 className="heading">View Employee</h3>
        <Link to={"/"} className="btn back_btn">
          Go Back
        </Link>

        <div className="data_view">
          {filterData.map((item, index) => {
            return (
            <Container>
              <Row>
                <Col className="view_data"><strong>Employee ID:</strong> {item.id}</Col>
                <Col className="view_data"><strong>First Name:</strong> {item.firstName}</Col>
                <Col className="view_data"> <strong>Last Name:</strong> {item.lastName}</Col>
              </Row>
              <Row>
                <Col className="view_data"><strong>Employee Age:</strong> {item.age}</Col>
                <Col className="view_data"><strong>Contact Number:</strong> {item.contact_no}</Col>
              </Row>
              <Row>
                <Col className="view_data"><strong>Email:</strong> {item.email}</Col>
                <Col className="view_data"><strong>Address:</strong> {item.address}</Col>
              </Row>
            </Container>
            );
          })}
        </div>
      </div>
    </div>
  );
}
