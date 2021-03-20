package com.home.security.domain.color;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
class ColorRepositoryImpl implements ColorRepository {

    private final ColorRepositoryJpa colorRepositoryJpa;

    @Override
    public Color save(Color color) {
        return colorRepositoryJpa.save(color);
    }

    @Override
    public Page<ColorListDTO> findByPage(String filter, Pageable pageable) {
        return colorRepositoryJpa.findByPage(filter, pageable);
    }

}
