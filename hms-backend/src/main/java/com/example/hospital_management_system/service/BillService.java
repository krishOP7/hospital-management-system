package com.example.hospital_management_system.service;

import com.example.hospital_management_system.model.Bill;
import com.example.hospital_management_system.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    public List<Bill> getAll() {
        return billRepository.findAll();
    }

    public Bill save(Bill bill) {
        return billRepository.save(bill);
    }

    public Bill update(Long id, Bill updated) {
        Bill existing = billRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bill not found"));
        existing.setPatient(updated.getPatient());
        existing.setAppointment(updated.getAppointment());
        existing.setAmount(updated.getAmount());
        existing.setPaymentStatus(updated.getPaymentStatus());
        existing.setBillDate(updated.getBillDate());
        return billRepository.save(existing);
    }

    public void delete(Long id) {
        billRepository.deleteById(id);
    }
}