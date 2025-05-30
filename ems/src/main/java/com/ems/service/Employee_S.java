package com.ems.service;

import com.ems.dto.Employee_Dto;
import java.util.List;

public interface Employee_S {
    Employee_Dto createEmployee(Employee_Dto employeeDto);
    Employee_Dto getEmployeeById(Long id);
    List<Employee_Dto> getAllEmployees();
    Employee_Dto updateEmployee(Long id, Employee_Dto updatedEmployee);
}