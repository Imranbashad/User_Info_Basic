let employees = [];
let idCounter = 1;

function addEmployee() {
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;
  document.getElementById("messageContainer").innerHTML = "";

  if (name === "" || profession === "" || age === "") {
    showMessage(
      "Error : Please Make sure All the fields are filled before adding an employee!",
      "error"
    );
    clearForm();
    return;
  }

  const employee = {
    id: idCounter++,
    name,
    profession,
    age,
  };

  employees.push(employee);
  showMessage("Success : Employee Added!", "success");
  displayEmployees();
  clearForm();
}

function showMessage(message, type) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${type}`;
  messageDiv.textContent = message;
  document.getElementById("messageContainer").appendChild(messageDiv);
}

function displayEmployees() {
  const employeeList = document.getElementById("employeeList");
  const noEmployees = document.getElementById("noEmployees");
  employeeList.innerHTML = "";
  if (employees.length === 0) {
    noEmployees.style.display = "block";
  } else {
    noEmployees.style.display = "none";
    employees.forEach((employee, index) => {
      const employeeDiv = document.createElement("div");
      employeeDiv.className = "employee";
      employeeDiv.innerHTML = `
                <div class="employeeDetails">
                    <div>${index + 1}.</div>
                    <div>Name: ${employee.name}</div>
                    <div>Profession: ${employee.profession}</div>
                    <div>Age: ${employee.age}</div>
                </div>
                <button onclick="deleteEmployee(${
                  employee.id
                })" class="deleteButton">Delete User</button>
            `;
      employeeList.appendChild(employeeDiv);
    });
  }
}

function deleteEmployee(id) {
  employees = employees.filter((employee) => employee.id !== id);
  displayEmployees();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";
}

document.addEventListener("DOMContentLoaded", displayEmployees);
