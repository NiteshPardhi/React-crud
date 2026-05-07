
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeesTable from './Employee/employees_table';
import ViewEmployees from './Employee/employee_view_form';
import CreateUpdateEmployees from './Employee/employee_form';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeesTable/>}></Route>
        <Route path='/employee/create' element={<CreateUpdateEmployees/>}></Route>
        <Route path='/employee/update/:id' element={<CreateUpdateEmployees/>}></Route>
        <Route path='/employee/view/:id' element={<ViewEmployees/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
