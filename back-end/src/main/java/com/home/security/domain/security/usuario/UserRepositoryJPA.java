package com.home.security.domain.security.usuario;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.UUID;

public interface UserRepositoryJPA extends JpaRepository<User, UUID> {

    @EntityGraph(attributePaths = {"authorities"})
    @Query("SELECT user FROM User user " +
            "LEFT JOIN user.authorities authority " +
            "WHERE UPPER(user.email) LIKE UPPER(:email)")
    Optional<User> findByEmailIgnoreCase(String email);

}
