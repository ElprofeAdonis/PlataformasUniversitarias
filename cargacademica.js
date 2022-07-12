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

var checkboxes = document.querySelectorAll("input[type=checkbox]");
let materiasSeleccionadas = [];
let creditosTotales = 0;

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function (element) {
    let elementoCheckbox = element.target;

    if (elementoCheckbox.checked === true) {
      const nuevosCreditos = creditosTotales + 3;

      if (nuevosCreditos <= 18) {
        creditosTotales = creditosTotales + 3;
        materiasSeleccionadas.push(elementoCheckbox.value);
      } else {
        elementoCheckbox.checked = false;
        alert("El numero de creditos excede al maximo");
      }
    }

    const materiaAgregada = materiasSeleccionadas.find(
      (element) => element === elementoCheckbox.value
    );
    if (elementoCheckbox.checked === false && materiaAgregada) {
      creditosTotales = creditosTotales - 3;
      materiasSeleccionadas = materiasSeleccionadas.filter(function (item) {
        return item !== elementoCheckbox.value;
      });
    }
  });
});

document
  .getElementById("form-datos-carga-academica")
  .addEventListener("submit", saveInfo);

function saveInfo(e) {
  e.preventDefault();

  let carrera = document.getElementById("carrera").value;

  let cargaAcademicaDatos = {
    carrera: carrera,
    materias: materiasSeleccionadas,
    creditos: creditosTotales,
  };
  localStorage.setItem("cargaAcademica", JSON.stringify(cargaAcademicaDatos));

  document.getElementById("form-datos-carga-academica").reset();
  window.location.href = "checkout.html";
}
