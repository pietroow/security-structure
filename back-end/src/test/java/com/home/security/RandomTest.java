package com.home.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class RandomTest {

    public static void main(String[] args) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String encode = bCryptPasswordEncoder.encode("123mudar");
        System.out.println(encode);
    }

}
