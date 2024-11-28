class SignInController {

    // [GET] /sign-in
    signIn(req, res) {
        res.render('sign-in');
    }

}

module.exports = new SignInController;