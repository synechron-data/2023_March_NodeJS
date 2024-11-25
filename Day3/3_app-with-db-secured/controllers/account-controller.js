exports.isAuthenticated = function (req, res, next) {
    // Logic to check user authentication status
    // res.status(401).send("Unauthorized Access!");

    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/account');
    }
}

exports.login_get = function (req, res) {
    res.render("account/login", { pageTitle: "Login View", message: req.flash('loginMessage') });
}

exports.login_post = function (passport) {
    // Logic to Authenticate the user and redirect
    return passport.authenticate('local-login', {
        successRedirect: '/employees',
        failureRedirect: '/account'
    });
}