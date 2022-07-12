function getInfosResult() {
  let datosPersonales = JSON.parse(localStorage.getItem("datosPersonales"));
  let cargaAcademica = JSON.parse(localStorage.getItem("cargaAcademica"));
  let infosResultView = document.getElementById("infosResult");

  infosResultView.innerHTML = "";

  let nombre = datosPersonales.nombre;
  let apellido = datosPersonales.apellido;
  let noCarnet = datosPersonales.noCarnet;

  let listaMaterias = "";

  for (var i = 0; i < cargaAcademica.materias.length; i++) {
    listaMaterias += `
          <li>${cargaAcademica.materias[i]} <i>(3 Creditos)</i></li>
      `;
  }

  const costoDeCreditosMatriculados = cargaAcademica.creditos * costoPorCredito;
  const total =
    costoDeCreditosMatriculados +
    seguro +
    asociacionEstudiantil +
    donacionSolidaria +
    cobroAdministrativo +
    matricula;

  infosResultView.innerHTML = `
      <div class="card mb-3">
          <div class="card-body">
              <p><strong>Nombre: </strong> ${nombre}</p>
              <p><strong>Apellido: </strong> ${apellido}</p>
              <p><strong>Codigo de alumno: </strong> ${noCarnet}</p>
          </div>
      </div>
  
      <div class="card mb-3">
          <div class="card-body">
              <p><strong>Carrera: </strong> ${cargaAcademica.carrera}</p>
              <p><strong>Materias: </strong> 
                <ul>
                    ${listaMaterias}
                </ul>
              </p>
              <p><strong>Desglose de pago: </strong>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Monto</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Costo de creditos matriculados (${cargaAcademica.creditos} * $${costoPorCredito})</td>
                        <td>$${costoDeCreditosMatriculados}</td>                    
                    </tr>
                    <tr>
                        <td>Seguro</td>
                        <td>$${seguro}</td>                    
                    </tr>
                    <tr>
                        <td>Asociacion Estudiantil</td>
                        <td>$${asociacionEstudiantil}</td>                    
                    </tr>
                    <tr>
                        <td>Donacion solidaria</td>
                        <td>$${donacionSolidaria}</td>                    
                    </tr>
                    <tr>
                        <td>Cobro admistrativo</td>
                        <td>$${cobroAdministrativo}</td>                    
                    </tr>
                    <tr>
                        <td>Matricula</td>
                        <td>$${matricula}</td>                    
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>$${total}</strong></td>                    
                    </tr>
                </table>
              </p>
          </div>
      </div>
      `;
}

getInfosResult();
//permite redireccionar a otra pagina
document
  .getElementById("form-datos-checkout")
  .addEventListener("submit", saveInfo);

function saveInfo(e) {
  e.preventDefault();

  document.getElementById("form-datos-checkout").reset();
  window.location.href = "metopagos.html";
}
