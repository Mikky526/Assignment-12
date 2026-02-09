const logger = (req, res, next) => {
    console.log(`${req.method} request to: ${req.url}`);
    next();
};

const notFound = (req, res) => {
    res.status(404).json({ message: "Route not found" });
};

module.exports = { logger, notFound };