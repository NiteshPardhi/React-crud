
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeesTable from './employees_table';
import ViewEmployees from './view_employee';
import CreateUpdateEmployees from './employee_form';

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
