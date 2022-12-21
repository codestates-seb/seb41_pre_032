package seb41_pre_32.back.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import seb41_pre_32.back.user.domain.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsUserByLoginId(String loginId);
    boolean existsUserByEmail(String email);


}
