package com.cursoJava.curso.controllers;

import com.cursoJava.curso.dao.UsuarioDao;
import com.cursoJava.curso.models.Usuario;
import com.cursoJava.curso.utils.JWTUtils;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioDao;
    @Autowired
    private JWTUtils jwtUtils;

    private boolean validarToken(String token){
        String usuarioId = jwtUtils.getKey(token);
        return usuarioId != null;
    }

    @RequestMapping(value = "api/usuarios")
    public List<Usuario> getUsuarios(@RequestHeader(value="Authorization") String token){
        if(!validarToken(token)) {return null;}
        return usuarioDao.getUsuarios();
    }

    @RequestMapping(value = "api/usuarios/{id}", method = RequestMethod.DELETE)
    public String eliminarUsuario(@PathVariable long id, @RequestHeader(value="Authorization") String token){
        if(!validarToken(token)) {return null;}
        usuarioDao.eliminarUsuario(id);
        return "{message: Eliminado}";
    }

    @RequestMapping(value = "api/usuario/{id}")
    //@RequestHeader(value="Authorization") String token
    public Usuario buscarUsuario(@PathVariable long id) {
        //if(!validarToken(token)) {return null;}
        return usuarioDao.buscarUsuario(id);
    }

    @RequestMapping(value = "api/registro", method = RequestMethod.POST)
    public void registrarUsuario(@RequestBody Usuario usuario){
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1, 1024, 1, usuario.getPassword());
        usuario.setPassword(hash);
        usuarioDao.registrar(usuario);
    }
}


