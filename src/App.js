
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeesTable from './employees_table';
import CreateEmployees from './create_employee';
import ViewEmployees from './view_employee';
import EditEmployees from './edit_employee';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeesTable/>}></Route>
        <Route path='/employee/create' element={<CreateEmployees/>}></Route>
        <Route path='/employee/edit/:id' element={<EditEmployees/>}></Route>
        <Route path='/employee/view/:id' element={<ViewEmployees/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
