package com.cursoJava.curso.dao;
import java.util.List;

import com.cursoJava.curso.models.Usuario;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.server.ResponseStatusException;

@Repository
@Transactional
public class UsuarioDaoImp implements UsuarioDao{

    @PersistenceContext
    EntityManager entityManager; // connection a la base de dates
    @Override
    public List<Usuario> getUsuarios() {
        String query = "FROM Usuario";
        return entityManager.createQuery(query, Usuario.class).getResultList();
    }

    @Override
    public void eliminarUsuario(long id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
        entityManager.remove(usuario);

    }

    @Override
    public Usuario buscarUsuario(long id) {
        String query = "FROM Usuario WHERE id = :id";
        List<Usuario> resultado = entityManager.createQuery(query)
                .setParameter("id", id)
                .getResultList();
        if(resultado.isEmpty()){

            return null;
        }
        return resultado.get(0);
    }

    @Override
    public void registrar(Usuario usuario) {
        entityManager.merge(usuario);
    }

    @Override
    public Usuario obtenerUsuarioPorCredenciales(Usuario usuario) {
        String query = "FROM Usuario WHERE email = :email";
        List<Usuario> resultado = entityManager.createQuery(query)
                .setParameter("email", usuario.getEmail())
                .getResultList();

        if(resultado.isEmpty()){
            return null;
        }

        String passwordHash = resultado.get(0).getPassword();
        Argon2 argon = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
         if(argon.verify(passwordHash, usuario.getPassword())){
            return resultado.get(0);
         };

         return  null;

    }
}
