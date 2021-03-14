package com.home.security.domain.usuario;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserFormDTO {

    private String name;
    private String email;
    private String password;

}
