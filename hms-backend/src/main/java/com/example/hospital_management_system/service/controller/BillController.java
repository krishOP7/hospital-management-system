package com.example.hospital_management_system.service.controller;

import com.example.hospital_management_system.model.Bill;
import com.example.hospital_management_system.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bills")
@CrossOrigin(origins = "http://localhost:5173")
public class BillController {

    @Autowired
    private BillService billService;

    @GetMapping
    public List<Bill> getAll() {
        return billService.getAll();
    }

    @PostMapping
    public Bill create(@RequestBody Bill bill) {
        return billService.save(bill);
    }

    @PutMapping("/{id}")
    public Bill update(@PathVariable Long id, @RequestBody Bill bill) {
        return billService.update(id, bill);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        billService.delete(id);
    }
}