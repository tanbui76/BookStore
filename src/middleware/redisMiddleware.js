import connectRD from '../config/connectRD.js';
const redisClient = connectRD;

function cacheMiddleware(req, res, next) {
    const cacheKey = req.originalUrl;

    redisClient.get(cacheKey, (err, data) => {
        if (err) {
            console.error('Redis Middleware: Error:', err);
            throw err;
        }

        if (data !== null) {
            console.log('Redis Middleware: Cache hit. Returning data from cache.');
            const responseData = JSON.parse(data);
            res.json(responseData);
        } else {
            console.log('Redis Middleware: Cache miss. Proceeding with database query.');
            res.sendResponse = res.json;
            res.json = (data) => {
                console.log('Redis Middleware: Saving data to cache.');
                redisClient.setex(cacheKey, 3600, JSON.stringify(data));
                res.sendResponse(data);
            };

            next();
        }
    });
}

module.exports = cacheMiddleware;
