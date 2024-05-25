document.addEventListener("DOMContentLoaded", () => {
    cargarUsuarios();
})

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
  document.getElementById("name-user").innerHTML = localStorage.email;
  for (let usuario of usuarios) {
    let botonEliminar = '<button onclick="eliminarUsuario('+ usuario.id +')" class="delete-btn">🗑️</button>';

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

  document.querySelector('#userTable tbody').outerHTML = listadoHtml;
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

