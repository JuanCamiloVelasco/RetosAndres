/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Retos.CicloTres.repository;

import com.Retos.CicloTres.model.Cabin;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.Retos.CicloTres.repository.crud.CabinCrudRepository;

@Repository
public class CabinRepository {
    
    @Autowired
    private CabinCrudRepository CabinCrudRepository;

    public List<Cabin> getAll(){
        return (List<Cabin>) CabinCrudRepository.findAll();
    }
    public Optional<Cabin> getCabin(int id){
        return CabinCrudRepository.findById(id);
    }
    public Cabin save(Cabin Cabaña){
        return CabinCrudRepository.save(Cabaña);
    }
    public void delete(Cabin Cabaña){
        CabinCrudRepository.delete(Cabaña);
    }
}
