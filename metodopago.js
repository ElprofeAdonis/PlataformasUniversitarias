document
  .getElementById("form-datos-metodo-pago")
  .addEventListener("submit", saveInfo);

function saveInfo(e) {
  e.preventDefault();

  let tipotarjeta = document.getElementById("tiptarj").value;
  let numtarjeta = document.getElementById("num").value;
  let fechexpiracion = document.getElementById("fech").value;
  let nomtitular = document.getElementById("nomtitu").value;
  let numpinseguridad = document.getElementById("pin").value;
  let direcion1 = document.getElementById("direcc-1").value;
  let direccion2 = document.getElementById("direcc-2").value;
  let provincia = document.getElementById("provin").value;
  let ciudad = document.getElementById("ciud").value;
  let canton = document.getElementById("canto").value;
  let distrito = document.getElementById("distri").value;
  let telefono = document.getElementById("tel").value;
  let nomtitularpaga = document.getElementById("nomtitular").value;
  let montopagar = document.getElementById("montpagar").value;

  const metodoPago = {
    tipotarjeta,
    numtarjeta,
    fechexpiracion,
    nomtitular,
    numpinseguridad,
    direcion1,
    direccion2,
    provincia,
    ciudad,
    canton,
    distrito,
    telefono,
    nomtitularpaga,
    montopagar,
  };

  console.log(metodoPago);

  localStorage.setItem("metodoPago", JSON.stringify(metodoPago));

  document.getElementById("form-datos-metodo-pago").reset();
  window.location.href = "total.html";
}

function getInfosResult() {
  let datosPersonales = JSON.parse(localStorage.getItem("datosPersonales"));
  let infosResultView = document.getElementById("infosResult");

  infosResultView.innerHTML = "";

  let nombre = datosPersonales.nombre;
  let apellido = datosPersonales.apellido;
  let noCarnet = datosPersonales.noCarnet;

  infosResultView.innerHTML = `
      <div class="card mb-3">
          <div class="card-body">
              <p><strong>Nombre: </strong> ${nombre}</p>
              <p><strong>Apellido: </strong> ${apellido}</p>
              <p><strong>Codigo de alumno: </strong> ${noCarnet}</p>
          </div>
      </div>
      `;
}
getInfosResult();
