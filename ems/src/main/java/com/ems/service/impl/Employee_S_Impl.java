package com.ems.service.impl;

import com.ems.dto.Employee_Dto;
import com.ems.entity.Employee;
import com.ems.exception.ResourceNotFoundException;
import com.ems.mapper.Employee_M;
import com.ems.repository.Employee_R;
import com.ems.service.Employee_S;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class Employee_S_Impl implements Employee_S {

    private Employee_R employee_R;

    @Override
    public Employee_Dto createEmployee(Employee_Dto employeeDto) {
        Employee employee = Employee_M.mapToEmployee(employeeDto);
        Employee saveEmployee= employee_R.save(employee);
        return Employee_M.mapToEmployeeDto(saveEmployee);
    }

    @Override
    public Employee_Dto getEmployeeById(Long id) {
        Employee employee = employee_R.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Employee is not exist with given id: "+ id));
        return Employee_M.mapToEmployeeDto(employee);
    }

    @Override
    public List<Employee_Dto> getAllEmployees() {
        List<Employee> employees = employee_R.findAll();
        return employees.stream().map((employee)->Employee_M.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public Employee_Dto updateEmployee(Long id, Employee_Dto updatedEmployee) {
        Employee employee = employee_R.findById(id).orElseThrow(
                ()->new ResourceNotFoundException("Employee is not exist with id: "+ id));
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        Employee updateEmployeeObj = employee_R.save(employee);
        return Employee_M.mapToEmployeeDto(updateEmployeeObj);
    }
}