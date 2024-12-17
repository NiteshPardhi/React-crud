
import { useEffect, useState } from 'react';
import './App.css';
import { EmployeeData } from './employeeData';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(EmployeeData)
  }, []);

  return (
    <div className="App">

      <div className='header'>
        <h1>Employees Data</h1>
        <button className='btn add_btn' type='submit'>Add Employee</button>
      </div>

      <div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <td>Sr.No</td>
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
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    <td>{item.contact}</td>
                    <td>
                      <button className='btn btn-primary'>Edit</button>
                      <button className='btn btn-danger mx-2'>Delete</button>
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

export default App;
