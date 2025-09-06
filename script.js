// Handle Login
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    // Save login state
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid username or password!";
  }
}

// Handle Logout
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "admin.html";
}

// Protect Dashboard
if (window.location.pathname.includes("dashboard.html")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "admin.html";
  }
}
function submitBooking(event) {
  event.preventDefault();

  let pickup = document.getElementById("pickup").value;
  let drop = document.getElementById("drop").value;
  let rideType = document.getElementById("rideType").value;

  document.getElementById("confirmation").innerText =
    `✅ Booking Confirmed! ${rideType} from ${pickup} to ${drop}`;
}

