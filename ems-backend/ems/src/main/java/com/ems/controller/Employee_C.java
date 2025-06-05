package com.ems.controller;

import com.ems.dto.Employee_Dto;
import com.ems.service.Employee_S;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class Employee_C {
    @Autowired
    private Employee_S employeeService;
    @Autowired
    private Employee_S employee_S;

    @PostMapping
    public ResponseEntity<Employee_Dto> createEmployee(@RequestBody Employee_Dto employeeDto){
        Employee_Dto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<Employee_Dto> getEmployees(@PathVariable("id") Long id){
        Employee_Dto employeeDto = employee_S.getEmployeeById(id);
        return ResponseEntity.ok(employeeDto);
    }
    @GetMapping
    public ResponseEntity<List<Employee_Dto>> getAllEmployees(){
        List<Employee_Dto> employeeDto = employeeService.getAllEmployees();
        return ResponseEntity.ok(employeeDto);
    }
    @PutMapping("{id}")
    public ResponseEntity<Employee_Dto> updateEmployee
            (@PathVariable("id") Long id, @RequestBody Employee_Dto updatedEmployeeDto){
        Employee_Dto employee_dto= employee_S.updateEmployee(id, updatedEmployeeDto);
        return ResponseEntity.ok(employee_dto);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id){
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee deleted Successfully");
    }
}