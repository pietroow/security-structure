package com.home.security.domain.security.usuario;

import java.util.Optional;

public interface UserRepository {

    User save(User user);

    Optional<User> findByEmailIgnoreCase(String email);

}
