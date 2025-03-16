const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:'Java'},
    { id: 4, name: 'Sawera', age: 18, department: 'IT', salary: 70000, specialization:'C++'},
    { id: 5, name: 'Jawad Ali', age: 22, department: 'CS', salary: 65000, specialization: 'Ruby on Rail'},
];

 // Function to display all employees
const totalEmployees = employees.map((employees, _index) => `<p>${employees.id}: ${employee.name}- ${employee.department} - $${employee.salary} - ${foundEmployee.specialization}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
   alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map ((employee, _index) => `<p>${employee.id}: ${employee.name}- ${employee.department} - $${employee.salary}- ${foundEmployee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee){
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}- ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}

function findBySpecializationJavaScript() {
    const foundEmployee = employees.find(employee => employee.specialization === specialization);
    
     document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.specialization}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
   
    
}