package com.home.security.domain.color;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;
import java.util.UUID;

@Getter
@Entity
@Table(name = "tb_color", schema = "security")
public class Color {

    @Id
    private UUID id;

    private String name;
    private String hex;

    public Color() {
        this.id = UUID.randomUUID();
    }

    public Color(CreateColorDTO createColorDTO) {
        this();
        this.name = createColorDTO.getName();
        this.hex = createColorDTO.getHex();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Color color = (Color) o;
        return Objects.equals(id, color.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Color{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", hex='" + hex + '\'' +
                '}';
    }

}
