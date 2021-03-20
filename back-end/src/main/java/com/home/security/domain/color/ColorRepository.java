package com.home.security.domain.color;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ColorRepository {

    Color save(Color color);

    Page<ColorListDTO> findByPage(String filter, Pageable pageable);

}
