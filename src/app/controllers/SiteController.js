class SiteController {

    // [GET] /
    home(req, res) {
        res.render('home');
    }

    // [GET] /sign-up
    signUp(req, res) {
        res.render('sign-up');
    }

}

module.exports = new SiteController;