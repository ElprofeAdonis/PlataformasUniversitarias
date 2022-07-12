function getInfosResult() {
  let datosPersonales = JSON.parse(localStorage.getItem("datosPersonales"));
  let cargaAcademica = JSON.parse(localStorage.getItem("cargaAcademica"));
  let metodoPago = JSON.parse(localStorage.getItem("metodoPago"));
  let infosResultView = document.getElementById("infosResult");

  infosResultView.innerHTML = "";
  //datos personales
  let nombre = datosPersonales.nombre;
  let apellido = datosPersonales.apellido;
  let edad = datosPersonales.edad;
  let noCarnet = datosPersonales.noCarnet;
  let noCedula = datosPersonales.noCedula;
  let direccion = datosPersonales.direccion;
  let estadoCivil = datosPersonales.estadoCivil;
  let telefono = datosPersonales.telefono;
  let correo = datosPersonales.correo;
  let contactoEmerg = datosPersonales.contactoEmerg;
  let numEmerg = datosPersonales.numEmerg;
  let correEmerg = datosPersonales.correEmerg;
  let parentEmerg = datosPersonales.parentEmerg;

  infosResultView.innerHTML = "";
  //datos del metodo de pago
  let tipotarjeta = metodoPago.tipotarjeta;
  let numtarjeta = metodoPago.numtarjeta;
  let fechexpiracion = metodoPago.fechexpiracion;
  let nomtitular = metodoPago.nomtitular;
  let numpinseguridad = metodoPago.numpinseguridad;
  let direcion1 = metodoPago.direcion1;
  let direccion2 = metodoPago.direccion2;
  let provincia = metodoPago.provincia;
  let ciudad = metodoPago.ciudad;
  let canton = metodoPago.canton;
  let distrito = metodoPago.distrito;

  let nomtitularpaga = metodoPago.nomtitularpaga;

  let listaMaterias = "";

  for (var i = 0; i < cargaAcademica.materias.length; i++) {
    listaMaterias += `
            <li>${cargaAcademica.materias[i]} <i>(3 Creditos)</i></li>
        `;
  }
  //declarar el monto total a pagar
  const costoDeCreditosMatriculados = cargaAcademica.creditos * costoPorCredito;
  const total =
    costoDeCreditosMatriculados +
    seguro +
    asociacionEstudiantil +
    donacionSolidaria +
    cobroAdministrativo +
    matricula;
  // se llaman los datos personales
  infosResultView.innerHTML = `
      <div class="card mb-3">
          <div class="card-body">
          <p><strong>Informacion personal del usuario matriculado:</strong></p> 
              <p><strong>Nombre: </strong> ${nombre}</p>
              <p><strong>Apellido: </strong> ${apellido}</p>
              <p><strong>edad: </strong> ${edad}</p>
              <p><strong>Codigo de alumno: </strong> ${noCarnet}</p>
              <p><strong>Numero cedula: </strong> ${noCedula}</p>
              <p><strong>Direccion: </strong> ${direccion}</p>
              <p><strong>Estado Civil: </strong> ${estadoCivil}</p>
              <p><strong>telefono: </strong> ${telefono}</p>
              <p><strong>Correo: </strong> ${correo}</p>
              <p><strong>Contancto de emergencia: </strong> ${contactoEmerg}</p>
              <p><strong>Numero de emergencia: </strong> ${numEmerg}</p>
              <p><strong>Coreo de emergencia: </strong> ${correEmerg}</p>
              <p><strong>Parebtesto emergencia: </strong> ${parentEmerg}</p>
          </div>
      </div>
      <div class="card mb-3">
          <div class="card-body"> 
          <p><strong>Informacion de metodo de la targeta de metodo de pago:</strong></p> 
              <p><strong>Tipo de tarjeta: </strong> ${tipotarjeta}</p>
              <p><strong>Numero de la tarjeta: </strong> ${numtarjeta}</p>
              <p><strong>Fecha de experiracion: </strong> ${fechexpiracion}</p>
              <p><strong>Nombre del titular de la tarjeta: </strong> ${nomtitular}</p>
              <p><strong>numero del pin de seguridad: </strong> ${numpinseguridad}</p>
              <p><strong>Direccio 1: </strong> ${direcion1}</p>
              <p><strong>Direccion 2: </strong> ${direccion2}</p>
              <p><strong>Provincia de localidad: </strong> ${provincia}</p>
              <p><strong>Ciuda de recidencia: </strong> ${ciudad}</p>
              <p><strong>Canton de residencia: </strong> ${canton}</p>
              <p><strong>Ditrito de residencia: </strong> ${distrito}</p>
              <p><strong>Numero telefonico: </strong> ${telefono}</p>
              <p><strong>Nombre del titular que paga: </strong> ${nomtitularpaga}</p>
              <p><strong>Monto a pagar: </strong> $${total}</p>
          </div>
      </div>
      <div class="card mb-3">
          <div class="card-body"> 
          <p><strong>Curso Universitario de la faculta de la:</strong></p>
          <p><strong>Carrera: </strong> ${cargaAcademica.carrera}</p>
          <p><strong>Materias matriculadas: </strong> 
            <ul>
                ${listaMaterias}
            </ul>
          </p>
          </div>
      </div>

  
      <div class="card mb-3">
          <div class="card-body">
              <p><strong>Detalle que son requisitos de la Universidad cobrar: </strong>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Descripcion</th>
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
                </table>
              </p>
          </div>
      </div>
      `;
}

getInfosResult();

//permite redireccionar a la pagina principal
document
  .getElementById("form-datos-checkout")
  .addEventListener("submit", saveInfo);

function saveInfo(e) {
  e.preventDefault();

  document.getElementById("form-datos-checkout").reset();
  window.location.href = "index.html";
}
