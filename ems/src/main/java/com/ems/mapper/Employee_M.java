package com.ems.mapper;

import com.ems.dto.Employee_Dto;
import com.ems.entity.Employee;

public class Employee_M {
    public static Employee_Dto mapToEmployeeDto(Employee employee){
        return new Employee_Dto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }
    public static Employee mapToEmployee(Employee_Dto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}