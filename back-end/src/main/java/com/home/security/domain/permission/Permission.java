package com.home.security.domain.permission;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "tb_permission", schema = "security")
public class Permission {

    @Id
    private UUID id;
    private String description;

    public Permission() {
        this.id = UUID.randomUUID();
    }

    public UUID getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return "Permission{" +
                "id=" + id +
                ", description='" + description + '\'' +
                '}';
    }

}
