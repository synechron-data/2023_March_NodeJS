const da = require('../data-access');

exports.getAll = (req, res) => {
    da.getAllEmployees().then(result => {
        res.status(200).json({data: result, message: "Success, getting Employees"});
    }, eMsg => {
        res.status(500).json({data: [], message: "Error, getting Employees"});
    });
}

exports.get = (req, res) => {
    var rid = req.params.rid;
    da.getEmployee(rid).then(result => {
        res.status(200).json({data: result, message: "Success, getting Employee"});
    }, eMsg => {
        res.status(500).json({data: null, message: "Error, getting Employee"});
    });
}

exports.create = (req, res) => {
    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    da.insertEmployee(employee).then(result => {
        res.status(201).json({data: result, message: "Success, creating Employee"});
    }, eMsg => {
        res.status(500).json({data: employee, message: "Error, creating Employee"});
    });
}

exports.update = (req, res) => {
    var rid = req.params.rid;
    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    da.updateEmployee(rid, employee).then(result => {
        res.status(200).json({data: result, message: "Success, updating Employee"});
    }, eMsg => {
        res.status(500).json({data: employee, message: "Error, updating Employee"});
    });
}

exports.delete = (req, res) => {
    var rid = req.params.rid;

    da.deleteEmployee(rid).then(result => {
        res.status(200).json({data: rid, message: "Success, deleting Employee"});
    }, eMsg => {
        res.status(500).json({data: rid, message: "Error, deleting Employee"});
    });
}