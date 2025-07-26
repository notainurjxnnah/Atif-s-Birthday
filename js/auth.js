function validateLogin(e) {
  e.preventDefault();
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  if (u === "baby" && p === "03102002") {
    window.location.href = "loading.html";
  } else {
    alert("Wrong credentials sayang 😢");
  }
}
