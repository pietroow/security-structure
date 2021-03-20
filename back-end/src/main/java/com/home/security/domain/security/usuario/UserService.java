package com.home.security.domain.security.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(UserFormDTO userFormDTO) {
        User user = new User(userFormDTO);
        return userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> usuarioOptional = userRepository.findByEmailIgnoreCase(email);
        return usuarioOptional.orElseThrow(() -> new UsernameNotFoundException(email));
    }

}
