
import { useEffect, useState } from 'react';
import { EmployeeData } from './employeeData';
import { Link, useNavigate} from 'react-router-dom';

function EmployeesTable() {
    
    //for get and set the data
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(EmployeeData)
    }, []);

    //for navigate programatically
    const navigate = useNavigate();

    const handleEdit = ((id) => {
        console.log(id);
        navigate("/employee/edit/:" + id);
    })

    const handleView = ((id) => {
        console.log(id);
    })

    //for delete data
    const handleDelete = ((index) => {
        if (window.confirm('Are You sure you want to delete..?')) {
            const dt = data.filter(item => item.id !== index);
            setData(dt)
        }
    })

    return (
        <div className="Employees_table">
            <h3 className='heading'>Employees Details</h3>
            <div className='header'>
                <Link to={'/employee/create'} className='btn add_btn'>Add Employee</Link>
            </div>

            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Age</td>
                            <td>Contact No</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.contact}</td>
                                        <td className='actions'>
                                            <Link to={'/employee/create'} className='btn btn-secondary mx-2'>View</Link>
                                            <Link className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</Link>
                                            <Link to={'/employee/create'} className='btn btn-danger mx-2' onClick={() => handleDelete(item.id)}>Delete</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmployeesTable;
