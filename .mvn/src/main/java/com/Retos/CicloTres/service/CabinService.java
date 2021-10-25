/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Retos.CicloTres.service;

import com.Retos.CicloTres.model.Cabin;
import com.Retos.CicloTres.repository.CabinRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CabinService {
    @Autowired
    private CabinRepository CabinRepository;

    public List<Cabin> getAll(){
        return CabinRepository.getAll();
    }

    public Optional<Cabin> getCabin(int id){
        return CabinRepository.getCabin(id);
    }

    public Cabin save(Cabin Cabaña){
        if(Cabaña.getId()==null){
            return CabinRepository.save(Cabaña);
        }else{
            Optional<Cabin> paux=CabinRepository.getCabin(Cabaña.getId());
            if(paux.isEmpty()){
                return CabinRepository.save(Cabaña);
            }else{
                return Cabaña;
            }
        }
    }
    public Cabin update(Cabin cabaña){
        if(cabaña.getId()!=null){
            Optional<Cabin>salas=CabinRepository.getCabin(cabaña.getId());
            if(!salas.isEmpty()){
                if(cabaña.getName()!=null){
                    salas.get().setName(cabaña.getName());
                }
                if(cabaña.getBrand()!=null){
                    salas.get().setBrand(cabaña.getBrand());
                }
                if(cabaña.getRooms()!=null){
                    salas.get().setRooms(cabaña.getRooms());
                }
                if(cabaña.getDescription()!=null){
                    salas.get().setDescription(cabaña.getDescription());
                }
                return CabinRepository.save(salas.get());
            }
        }
        return cabaña;
    }
    public boolean deleteCabin(int id){
        Optional<Cabin> Cabaña=getCabin(id);
        if(!Cabaña.isEmpty()){
            CabinRepository.delete(Cabaña.get());
            return true;
        }
        return false;
    }
}
