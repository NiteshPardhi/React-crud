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
    var [data, setData] = useState([]);
    useEffect(() => {
        setData(EmployeeData);
    }, []);
    var givenData = [...EmployeeData];

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

    //for filter table data
    const filterFunction = (e) => {
        var searchInput = e;

        var filterData = givenData.filter((item) => {
          return item.firstName.toLowerCase().includes(searchInput.toLowerCase());
        });
        setData(filterData);
    }

    return (
        <>
            <div className="Employees_table">
                <h3 className="heading">Employees Details</h3>
                <div className="ml-40">
                    <p>Here we can show static data from json </p>
                </div>
                <div className="ml-40">
                    <input placeholder="Serach by Name..." onChange={e => filterFunction(e.target.value)}></input>
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
                        <span><i class="bi bi-plus-circle-fill mx-2"></i></span>
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
                                            <i class="bi bi-eye-fill mx-2" onClick={() => handleView(item.id)}></i>
                                            <i class="bi bi-pencil-fill mx-2" onClick={() => handleEdit(item.id)}></i>
                                            <i class="bi bi-trash-fill" onClick={() => handleDelete(item.id)}></i>
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
