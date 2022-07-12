document.getElementById("form-datos").addEventListener("submit", saveInfo);

function saveInfo(e) {
  e.preventDefault();

  let nombre = document.getElementById("nomb").value;
  let apellido = document.getElementById("apell").value;
  let edad = document.getElementById("edad").value;
  let noCarnet = document.getElementById("nocar").value;
  let noCedula = document.getElementById("ced").value;
  let direccion = document.getElementById("direcc").value;
  let estadoCivil = document.getElementById("input2").value;
  let telefono = document.getElementById("tel").value;
  let correo = document.getElementById("corr").value;
  let contactoEmerg = document.getElementById("contemerg").value;
  let numEmerg = document.getElementById("numemerg").value;
  let correEmerg = document.getElementById("correEmerg").value;
  let parentEmerg = document.getElementById("parenEmerg").value;

  const datosPersonales = {
    nombre,
    apellido,
    edad,
    noCarnet,
    noCedula,
    direccion,
    estadoCivil,
    telefono,
    correo,
    contactoEmerg,
    numEmerg,
    correEmerg,
    parentEmerg,
  };

  localStorage.setItem("datosPersonales", JSON.stringify(datosPersonales));

  document.getElementById("form-datos").reset();
  window.location.href = "caracademi.html";
}
