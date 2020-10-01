import React from 'react';
import Navbar from './components/navbar';
import EmployeesTable from './components/employeeTable';
import Employees from './utils/employees';


const App = () => {

  const [employees] = React.useState(Employees);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  const searchedEmployees = employees.filter(result => {
    const searchBylastName = result.lastName.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByfirstName = result.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByTitle = result.title.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByPhone = result.phone.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByEmail = result.email.toLowerCase().includes(searchTerm.toLowerCase());
    return searchBylastName || searchByfirstName || searchByTitle || searchByPhone || searchByEmail;
  })

  return (
    <div>
      <Navbar onSearch={handleSearch} search={searchTerm} />
      <EmployeesTable employees={searchedEmployees} />
    </div>
  )
};


export default App;
