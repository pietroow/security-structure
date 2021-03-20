package com.home.security.domain.color;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ColorService {

    private final ColorRepository colorRepository;

    public Color createColor(CreateColorDTO createColorDTO) {
        Color color = new Color(createColorDTO);
        return colorRepository.save(color);
    }

    public Page<ColorListDTO> findByPage(String filter, Pageable pageable) {
        return colorRepository.findByPage(filter, pageable);
    }

}
