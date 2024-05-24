package com.cursoJava.curso.controllers;

import com.cursoJava.curso.dao.UsuarioDao;
import com.cursoJava.curso.models.Usuario;
import com.cursoJava.curso.utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AuthController {
    @Autowired
    private UsuarioDao usuarioDao;
    @Autowired
    private JWTUtils jwtUtils;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario){
        Usuario idUsuario = usuarioDao.obtenerUsuarioPorCredenciales(usuario);
        if (idUsuario != null){
            String tokenJwt = jwtUtils.create(String.valueOf(idUsuario.getId()), idUsuario.getEmail());
            return tokenJwt;
        }

        return "FAIL";
    }
}
