package com.home.security.domain.usuario;

import java.util.Optional;

public interface UserRepository {

    User save(User user);

    Optional<User> findByEmailIgnoreCase(String email);

}
