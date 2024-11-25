const { readData, writeData } = require("../utilities/file-handler");

let employees = [];

(function () {
    readData().then(data => {
        employees = data;
    }, err => {
        employees = [];
    })
})();

exports.getAllEmployees = function () {
    return new Promise((resolve, reject) => {
        if (employees.length)
            resolve(employees);
        else
            reject("Employess not found");
    });
}

exports.getEmployee = function (id) {
    return new Promise((resolve, reject) => {
        if (employees.length)
            resolve(employees.find(e => e.id === Number(id)));
        else
            reject("Employes not found");
    });
}

exports.insertEmployee = function (employee) {
    return new Promise((resolve, reject) => {
        employees = [...employees, { ...employee }];
        writeData(employees).then(data => {
            employees = data;
            resolve(employees.find(e => e.id === Number(employee.id)));
        }, err => {
            reject(err);
        })
    });
}

exports.updateEmployee = function (employee) {
    return new Promise((resolve, reject) => {
        var itemIndex = employees.findIndex(e => e.id === parseInt(employee.id));
        var tempEmployees = [...employees];
        tempEmployees.splice(itemIndex, 1, { ...employee });
        employees = [...tempEmployees];

        writeData(employees).then(data => {
            employees = data;
            resolve(employees.find(e => e.id === Number(employee.id)));
        }, err => {
            reject(err);
        })
    });
}

exports.deleteEmployee = function (id) {
    return new Promise((resolve, reject) => {
        employees = [...employees.filter(e => e.id !== Number(id))];

        writeData(employees).then(data => {
            employees = data;
            resolve("Success, Deleting Employee");
        }, err => {
            reject(err);
        })
    });
}