function toggleMode() {
  document.body.classList.toggle("light");
}
body {
  background: #111;
  color: #f5f5f5;
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 40px;
}

h1 {
  color: limegreen;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin-bottom: 20px;
}

button {
  background: limegreen;
  color: black;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #00cc66;
}
// Manage Users (Dummy Only)
function deleteUser(button) {
  let row = button.parentElement.parentElement;
  row.remove();
}

function addUser() {
  let name = document.getElementById("newName").value;
  let role = document.getElementById("newRole").value;

  if (name.trim() === "") {
    alert("Please enter a name");
    return;
  }

  let table = document.getElementById("usersTable").getElementsByTagName("tbody")[0];
  let newRow = table.insertRow();

  let idCell = newRow.insertCell(0);
  let nameCell = newRow.insertCell(1);
  let roleCell = newRow.insertCell(2);
  let actionCell = newRow.insertCell(3);

  idCell.innerHTML = table.rows.length; // auto increment
  nameCell.innerHTML = name;
  roleCell.innerHTML = role;
  actionCell.innerHTML = `<button onclick="deleteUser(this)">Delete</button>`;

  document.getElementById("newName").value = "";
}
function logout() {
  // Redirect back to login page
  window.location.href = "admin.html";
}



