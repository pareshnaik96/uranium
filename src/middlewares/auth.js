const jwt = require("Jsonwebtoken");


const validateToken = function (req, res, next) {

    try {
        let token = (req.headers["x-Auth-token"] || req.headers["x-auth-token"]);
        if (!token) {
            return res.status(400).send({ status: false, msg: "token must be present" });
        } else {
            let decodedToken = jwt.verify(token, "functionup-uranium");
            if (!decodedToken) {
                return res.status(400).send({ status: false, msg: "token is invalid" });
            } else {
                let userToBeModified = req.params.userId;
                let userLoggedIn = decodedToken.userId;
                if (userToBeModified == userLoggedIn) {
                    next();
                } else {
                    return res.status(500).send({ status: false, msg: "user logged is not allowed to access or modify requested user data" });
                }
            }
        }
    }
    catch (error) {
        res.status(500).send({ msg: "error", error: error.message })
    }

}


module.exports.validateToken = validateToken
