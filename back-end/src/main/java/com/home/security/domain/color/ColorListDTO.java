package com.home.security.domain.color;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ColorListDTO {

    public static final String PATH = "com.home.security.domain.color.ColorListDTO";

    private UUID id;
    private String name;
    private String hex;

}
