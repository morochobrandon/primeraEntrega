const mensajeError = document.getElementsByClassName("error")[0];

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  // asi obtenemos los datos del formulario
  const user = e.target.children.user.value; //el valor que tiene el user que es hijo que tiene el fomulario
  const password = e.target.children.password.value; //el valor que tiene el password que es hijo que tiene el fomulario
  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
      password,
    }),
  });
  if (!res.ok) return mensajeError.classList.toggle("escondido", false);
  const resJson = await res.json();
  if (resJson.redirect) {
    window.location.href = resJson.redirect;
  }
});
