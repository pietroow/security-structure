package com.home.security.util;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FilterPageable {

    private Integer page = 0;
    private Integer linesPerPage = 10;
    private String orderBy = "id";
    private String direction = "ASC";

    public PageRequest listByPage() {
        return PageRequest.of(
                page,
                linesPerPage,
                Sort.Direction.valueOf(direction.toUpperCase()),
                orderBy
        );
    }

}
