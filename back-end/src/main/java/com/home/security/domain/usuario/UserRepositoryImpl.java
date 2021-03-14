package com.home.security.domain.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserRepositoryImpl implements UserRepository {

    @Autowired
    private UserRepositoryJPA userRepositoryJPA;

    public User save(User user) {
        return userRepositoryJPA.save(user);
    }

    @Override
    public Optional<User> findByEmailIgnoreCase(String email) {
        return userRepositoryJPA.findByEmailIgnoreCase(email);
    }

}
