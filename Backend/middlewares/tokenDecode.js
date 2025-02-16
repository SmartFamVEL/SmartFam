const jwt = require('jsonwebtoken');

const tokenDecode = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ Msg: "Unauthorized: No token provided" });
        }

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "Sivajivailajileebiii");

        req.D_Email = decoded.email;

        if (!req.D_Email) {
            return res.status(400).json({ Msg: "Email missing in token" });
        }

        next();
    } catch (err) {
        console.error("Token Decode Error:", err);
        return res.status(401).json({ Msg: "Unauthorized: Invalid token" });
    }
};

module.exports = { tokenDecode };
