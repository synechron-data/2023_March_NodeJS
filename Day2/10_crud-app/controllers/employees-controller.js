const da = require('../data-access');

exports.index = (req, res) => {
    res.render("employees/index", { pageTitle: "Employees View", empList: da.getAllEmployees() });
}

exports.details = (req, res) => {
    var id = req.params.empid;
    res.render("employees/details", { pageTitle: "Employee Details View", employee: da.getEmployee(id) });
}

exports.create_get = (req, res) => {
    res.render("employees/create", { pageTitle: "Create Employee View" });
}

exports.create_post = (req, res) => {
    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    if (da.insertEmployee(employee)) {
        res.redirect('/employees');
    } else {
        res.render("employees/create", { pageTitle: "Create Employee View" });
    }
}

exports.edit_get = (req, res) => {
    var id = req.params.empid;
    res.render("employees/edit", { pageTitle: "Employee Edit View", employee: da.getEmployee(id) });
}

exports.edit_post = (req, res) => {
    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    if (da.updateEmployee(employee)) {
        res.redirect('/employees');
    } else {
        res.render("employees/edit", { pageTitle: "Employee Edit View", employee: da.getEmployee(id) });
    }
}

exports.delete_get = (req, res) => {
    var id = req.params.empid;
    res.render("employees/delete", { pageTitle: "Employee Delete View", employee: da.getEmployee(id) });
}

exports.delete_post = (req, res) => {
    var id = req.params.empid;

    if (da.deleteEmployee(id)) {
        res.redirect('/employees');
    } else {
        res.render("employees/delete", { pageTitle: "Employee Delete View", employee: da.getEmployee(id) });
    }
}