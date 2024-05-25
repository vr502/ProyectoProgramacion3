

async function buscarUsuario() {

    var idUsuario = document.getElementById('searchId').value.toLowerCase().toString();
    if(idUsuario != ''){
        const request = await fetch('api/usuario/' + idUsuario, {
            method: 'GET',
            headers: getHeaders()
        })

        try {
            const usuario = await request.json();
            console.log(usuario)
            let listadoHtml = '';
            let botonEliminar = '<button onclick="eliminarUsuario('+ usuario.id +')" class="delete-btn">🗑️</button>';
            let usuarioHtml = '<tr>' +
                '<td>' + usuario.id + '</td>' +
                '<td>' + usuario.nombre + '</td>' +
                '<td>' + usuario.apellido + '</td>' +
                '<td>' + usuario.telefono + '</td>' +
                '<td>' + usuario.email + '</td>' +
                '<td>' + botonEliminar + '</td>';

            listadoHtml += usuarioHtml;
            document.querySelector('#userTable tbody').outerHTML = listadoHtml;

        } catch (e) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Usuario No Encontrado!"
            });
        }

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Ingrese un Id de Usuario!"
        });
    }

}