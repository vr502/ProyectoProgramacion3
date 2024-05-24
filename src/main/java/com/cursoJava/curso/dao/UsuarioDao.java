package com.cursoJava.curso.dao;
import java.util.List;
import com.cursoJava.curso.models.Usuario;
public interface UsuarioDao {

    List<Usuario> getUsuarios();

    void eliminarUsuario(long id);

    Usuario buscarUsuario(long id);

    void registrar(Usuario usuario);

    Usuario obtenerUsuarioPorCredenciales(Usuario usuario);
}
