const jwt = require('jsonwebtoken');

const tokenGen = (email) => {
    try {
        const Token = jwt.sign({ email: email }, "Sivajivailajileebiii", { expiresIn: '1hr' });

        if (!Token) {
            return { status: 400, Msg: "Token cannot be generated" };
        }
        return { status: 200, Msg: 'Token Generated successfully....', Token: Token };
    } catch (err) {
        return { status: 500, Msg: "Server Error", error: err };
    }
}

module.exports = { tokenGen };
