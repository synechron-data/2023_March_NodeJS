const da = require('../data-access');

exports.index = (req, res) => {
    res.render("employees/index", { pageTitle: "Employees View", empList: da.getAllEmployees() });
}