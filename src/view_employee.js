import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployees() {
  //for get emp ID using param
  const param = useParams();

  //for get data from localstorage
  const allData = JSON.parse(localStorage.getItem("empData") || "{}");

  const filterData = allData.filter((item) => item.id == param.id);
  //console.log(filterData);

  return (
    <div className="container">
      <div className="header">
        <h3 className="heading">View Employee</h3>
        <Link to={"/"} className="btn add_btn">
          Go Back
        </Link>

        <div className="data_view">
          {filterData.map((item, index) => {
            return (
              <>
                <p>
                  <strong>Employee ID:</strong> {item.id}
                </p>
                <p>
                  <strong>First Name:</strong> {item.firstName}
                </p>
                <p>
                  <strong>Last Name:</strong> {item.lastName}
                </p>
                <p>
                  <strong>Employee Age:</strong> {item.age}
                </p>
                <p>
                  <strong>Contact Number:</strong> {item.contact_no}
                </p>
                <p>
                  <strong>Email:</strong> {item.email}
                </p>
                <p>
                  <strong>Address:</strong> {item.address}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
