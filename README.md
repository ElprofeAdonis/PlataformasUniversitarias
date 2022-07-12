# PlataformasUniversitarias
Problema
Contexto:
Las universidades cada dia mueven más partes de su operación a plataformas deinternet para facilitar el acceso a ellas por parte de sus usuarios. Una de talesplataformas es la de matrícula de un nuevo alumno, donde en su forma más basicarepresenta la toma de información (en forma de paginas) de la siguiente forma:
1.Información general del alumno
2.Carga academica
3.Total: Esta es la pagina de “checkout” donde se muestrala informacion basicadel alumno (nombre, carrera, codigo alumno) y el desglose de los productos(materias (en termino de creditos), obligaciones y matricula) a pagar.
4.Método de pago. En esta página de alguna forma u otra se tiene que mostrarsolo la lista de productos a pagar aparte de la toma de datos
5.Completado: En esta página se muestra un resumen de toda la informaciónobtenida en el proceso.

Descritos están a continuación cada uno de estos:
Informacion General:
Esta cubre la siguiente informacion del alumno:
●Nombre●Apellido●Edad●No. carné Estudiante●No. Cedula●Direccion●Estado civil●Telefono●Correo●Nombre contacto emergencia●Numero contacto emergencia●Correo contacto emergencia●Parentesco contacto emergencia

Carga Académica
●Carrera●Materias●Cantidad de Créditos
○Este es calculando sumando los valores de los creditos por materia. Nose pueden exceder más de 18 creditos por cuatrimestre

Total
●Responsabilidades (seguro, asociacion estudiantil, etc.)●Costo carga académica○Se cobra por crédito matriculado●Matricula

Metodo de pago
●Tipo de tarjeta (debito o credito)●Informacion de tarjeta○Numero○Fecha de expiracion○Nombre del titular○PIN (3 o 4 digitos) de seguridad●Direccion de pago del titular (billing address)○Direccion 1○Direccion 2 (apt, condominio #, piso, oficina #, etc.)○Provincia○Ciudad○Canton○Distrito●Codigo ZIP●Telefono●Nombre de titular●Monto a Pagar○(siempre se cobra la totalidad del cuatrimestre en un solo pago)

Problema
Usando solo HTML/CSS/JS y PHP.

Crear un web de matrícula para universidad con 5 páginas web distintas para obtenerla información necesaria para el proceso (descrita anteriormente). Al terminar momentode ejecutar el pago en la 4ta pagina enviar en un correo (usando PHP mail() function)a:matricula@unicool.ed.comconteniendo toda la informaciónrecaudada estructuradade una forma legible.

Utilizar los tipos de input apropiados para campo según lo dictamine la buenaExperiencia de Usuario (UX)(evitar por ejemplo camposde texto paratodo, o utilizarun tipo de input no apropiado para el valor, como un slider para tomar la edad...)

Cada página tiene información extra que describe lo que ellas hacen y los camposestán apropiadamente identificados con una etiqueta (label). Debido a su contenidodenso, asegurarse que las páginas son legibles y escaneables (Más info:What isscannability?)

Tomar en cuenta la siguiente información a la hora de construir la página:

Carreras:

●Ingeniería en Sistemas

Materias:Costo por credito: $75
●Programacion I (3 creditos)●Analisis de sistemas I (3 creditos)●Administracion I (3 creditos)●Contabilidad I (3 creditos)●Economia I (3 creditos)●Gramatica y Composicion (3 creditos)●Vida y enseñanza de Jesus (3 creditos)●Programacion II (3 creditos)●Fundamentos de Electronica (3 creditos)●Telematica I (3 creditos)

Costo Total:

●Responsabilidades
Todas las responabilidades son obligatorias
○Seguro: 
$70○Asociacion Estudiantil: 
$20○Donacion solidaria “fondo comparte una clase”: $50
○Cobro administrativo: $20

●Matricula: $150


Evaluacion

●Diseño●Funcionalidad (Dada por la inclusión de PHP)●Diagrama de HTML DOM describiendo la implementación entregada de las 5 páginas●Estructuración●Entrega de wireframes●Entrega de guía de diseño. Esta describe:○Seleccion de fuente(s)○Paleta de colores○Justificacion para uso de paleta de colores○Inspiracion para el diseño (Estructuracion) de cada pagina●Uso de los tags html relevantes●Atención al detalle, contenido●Relevancia del contenido●Distribución del contenido●Experiencia de Usuario (UX)●Uso de estilos (CSS
