function authMiddleware(req,res, next) {
    const username = req.headers.username;

    if(!username) {
        return req.status(401).json({
            message : "Unaothorized"
        });
    }

    req.user = {
        username
    };

    next();

}

module.exports = authMiddleware;