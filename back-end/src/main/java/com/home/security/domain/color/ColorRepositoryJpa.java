package com.home.security.domain.color;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

interface ColorRepositoryJpa extends JpaRepository<Color, UUID> {

    @Query("SELECT new " + ColorListDTO.PATH + "(color.id, color.name, color.hex) " +
            "FROM Color color " +
            "WHERE upper(color.name) LIKE %:filter%")
    Page<ColorListDTO> findByPage(String filter, Pageable pageable);

}
