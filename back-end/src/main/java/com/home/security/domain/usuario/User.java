package com.home.security.domain.usuario;

import com.home.security.domain.permission.Permission;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;

@Entity
@Table(name = "tb_user", schema = "security")
public class User implements UserDetails {

    @Id
    private UUID id;
    private String name;
    private String email;
    private String password;

    @ManyToMany()
    @JoinTable(name = "tb_user_permission", joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "permission_id"), schema = "security")
    private Set<Permission> permissions = new HashSet<>();

    public User() {
        this.id = UUID.randomUUID();
    }

    public User(UserFormDTO userFormDTO) {
        this();
        this.name = userFormDTO.getName();
        this.email = userFormDTO.getEmail();
        this.password = userFormDTO.getPassword();
    }

    @Override
    public Set<GrantedAuthority> getAuthorities() {
        return permissions.stream()
                .map(o -> new SimpleGrantedAuthority(o.getDescription().toUpperCase()))
                .collect(Collectors.toSet());
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

}
