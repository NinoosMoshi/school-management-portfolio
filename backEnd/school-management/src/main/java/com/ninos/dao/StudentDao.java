package com.ninos.dao;

import com.ninos.entity.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StudentDao extends JpaRepository<Student, Long> {

    //    @Query("select s from Student as s where s.firstName like %:name% or s.lastName like %:name%")
//    List<Student> findStudentsByName(@Param("name") String name);
    @Query("select s from Student as s where s.firstName like %:name% or s.lastName like %:name%")
    Page<Student> findStudentsByName(@Param("name") String name, PageRequest pageRequest);


    @Query("select s from Student as s where s.user.email=:email")
    Student findStudentByEmail(@Param("email") String email);


}
