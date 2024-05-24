// Call the dataTables jQuery plugin
$(document).ready(function() {
cargarUsuarios();
  
  $('#usuarios').DataTable();
});

function getHeaders() {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': localStorage.token
  };
}

async function cargarUsuarios() {
  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: getHeaders()
  });

  const usuarios = await request.json()

  let listadoHtml = '';
  for (let usuario of usuarios) {
    let botonEliminar = '<a href="#" onclick="eliminarUsuario('+ usuario.id +')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';

    let telefonoTexto = usuario.telefono == null ? '-' : usuario.telefono;
    let usuarioHtml = '<tr>' +
        '<td>' + usuario.id + '</td>' +
        '<td>' + usuario.nombre + '</td>' +
        '<td>' + usuario.apellido + '</td>' +
        '<td>' + usuario.telefono + '</td>' +
        '<td>' + usuario.email + '</td>' +
        '<td>' + botonEliminar + '</td>';

    listadoHtml += usuarioHtml;
  }

  document.querySelector('#usuarios tbody').outerHTML = listadoHtml;
}
function eliminarUsuario(id) {
     Swal.fire({
         title: "¿Estas Seguro?",
         text: "Quieres eliminar el usuario",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Si",
         cancelButtonText: "No"
     }).then(async (result) => {
         if (result.isConfirmed) {
             const request = await fetch('api/usuarios/' + id, {
                 method: 'DELETE',
                 headers: getHeaders()
             });
             Swal.fire({
                 title: "Deleted!",
                 text: "Usuario Eliminado Correctamente.",
                 icon: "success"
             });
             location.reload();
         }
     });
 }

