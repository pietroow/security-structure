package com.home.security.domain.color;

import com.home.security.util.FilterPageable;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/color")
@RequiredArgsConstructor
public class ColorController {

    private final ColorService colorService;

    @PostMapping
    @PreAuthorize("hasAuthority('SECCOL')")
    public ResponseEntity<Color> createColor(@RequestBody CreateColorDTO createColorDTO) {
        Color color = colorService.createColor(createColorDTO);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(color.getId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    @GetMapping
    @PreAuthorize("hasAuthority('SERCOL')")
    public Page<ColorListDTO> findByPage(@RequestParam(value = "filter", defaultValue = "") String filter,
                                      FilterPageable filterPageable) {
        return colorService.findByPage(filter, filterPageable.listByPage());
    }

}
