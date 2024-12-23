import { useEffect, useState } from "react";
import { EmployeeData } from "./employeeData";
import { Link, useNavigate } from "react-router-dom";

function EmployeesTable() {
    //for get data from localstorage
    const allData = JSON.parse(localStorage.getItem("empData"));
    // console.log(allData)

    let employeeData = [];
    if (allData){
        employeeData = [...allData];
    }

    //for get and set the data
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(EmployeeData);
    }, []);

    //for navigate programatically
    const navigate = useNavigate();

    //for handle edit record
    const handleEdit = (id) => {
        navigate("/employee/update/" + id);
    };

    //for handle view details
    const handleView = (id) => {
        navigate("/employee/view/" + id);
    };

    //for delete data
    const handleDelete = (index) => {
        if (window.confirm("Are You sure you want to delete..?")) {
            const dt = employeeData.filter((item) => item.id !== index);
            localStorage.setItem('empData', JSON.stringify(dt));
            setData(dt);
        }
    };

    return (
        <>
            <div className="Employees_table">
                <h3 className="heading">Employees Details</h3>
                <div>
                    <p className="text">Here we can show static data from json </p>
                </div>
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Age</td>
                                <td>Contact No</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.contact}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="Employees_table">
                <div className="header">
                    <Link to={"/employee/create"} className="btn add_btn">
                        Add Employee
                    </Link>
                </div>
                <div>
                    <p className="text">Here we can show dynamic data from json </p>
                </div>

                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Age</td>
                                <td>Contact No</td>
                                <td>Email</td>
                                <td>Address</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.contact_no}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td className="actions">
                                            <button
                                                className="btn btn-secondary mx-2"
                                                onClick={() => handleView(item.id)}
                                            >
                                                View
                                            </button>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleEdit(item.id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger mx-2"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default EmployeesTable;
